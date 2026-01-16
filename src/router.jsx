import { Navigate } from 'react-router-dom';
import App from './App';
import Beranda from './pages/Beranda';
import Tentang from './pages/Tentang';
import Produk from './pages/Produk';
import Layanan from './pages/Layanan';
import Kontak from './pages/Kontak';
import Karir from './pages/Karir';
import HighlightsPage from './pages/highlights/HighlightsPage';
import HighlightsPostPage from './pages/highlights/HighlightsPostPage';
import TrailingSlashEnforcer from './components/TrailingSlashEnforcer';
import sanityClient from './sanityClient';

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
        },
      },
      { path: "highlights/:slug", element: <HighlightsPostPage /> },
    ],
  },
];
