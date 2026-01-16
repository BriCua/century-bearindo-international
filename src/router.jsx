import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import App from './App';
import TrailingSlashEnforcer from './components/TrailingSlashEnforcer';
import sanityClient from './sanityClient';

// Lazy load all the page components
const Beranda = lazy(() => import('./pages/Beranda'));
const Tentang = lazy(() => import('./pages/Tentang'));
const Produk = lazy(() => import('./pages/Produk'));
const Layanan = lazy(() => import('./pages/Layanan'));
const Kontak = lazy(() => import('./pages/Kontak'));
const Karir = lazy(() => import('./pages/Karir'));
const HighlightsPage = lazy(() => import('./pages/highlights/HighlightsPage'));
const HighlightsPostPage = lazy(() => import('./pages/highlights/HighlightsPostPage'));

export const routes = [
  {
    path: "/",
    element: (
      <TrailingSlashEnforcer>
        <App />
      </TrailingSlashEnforcer>
    ),
    children: [
      { index: true, element: <Beranda /> },
      { path: "beranda", element: <Navigate to="/" replace /> },
      { path: "tentang", element: <Tentang /> },
      { path: "produk", element: <Produk /> },
      { path: "layanan", element: <Layanan /> },
      { path: "kontak", element: <Kontak /> },
      { path: "karir", element: <Karir /> },
      {
        path: "highlights",
        element: <HighlightsPage />,
        loader: async ({ request }) => {
          try {
            const url = new URL(request.url);
            const category = url.searchParams.get('category');
            const subcategory = url.searchParams.get('subcategory');

            let query = `*[_type == "post"`;
            if (category) {
              query += ` && category == "${category}"`;
            }
            if (subcategory) {
              query += ` && subcategory == "${subcategory}"`;
            }
            query += `]{
              title,
              slug,
              publishedAt,
              excerpt,
              category,
              subcategory,
              mainImage{
                asset->{
                  _id,
                  url
                }
              },
              "name": author->name,
            } | order(publishedAt desc)`;

            const posts = await sanityClient.fetch(query);
            return { posts };
          } catch (error) {
            console.error("!!! Sanity fetch failed:", error.message);
            // Return an empty array and the error message for debugging
            return { posts: [], error: error.message };
          }
        },
      },
      { path: "highlights/:slug", element: <HighlightsPostPage /> },
    ],
  },
];
