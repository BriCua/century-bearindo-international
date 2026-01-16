// server/sitemap.js

import sanityClient from '../src/sanityClient.js'; // Adjust path as necessary

const URL = 'https://century-bearindo-international.netlify.app/'; // IMPORTANT: Replace with your actual domain

const staticRoutes = [
  '/',
  '/tentang',
  '/produk',
  '/layanan',
  '/kontak',
  '/karir',
  '/highlights',
];

export async function generateSitemap() {
  const posts = await sanityClient.fetch(`*[_type == "post" && defined(slug.current)]{
    "slug": slug.current,
    "updatedAt": _updatedAt
  }`);

  // Combine static and dynamic routes
  const allRoutes = [
    ...staticRoutes.map(route => ({
      loc: `${URL}${route}`,
      lastmod: new Date().toISOString(), // Static pages can use current date for lastmod
    })),
    ...posts.map(post => ({
      loc: `${URL}/highlights/${post.slug}`,
      lastmod: new Date(post.updatedAt).toISOString(),
    })),
    // Add other dynamic content types (products, services) here if they have detail pages
  ];

  // Generate XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allRoutes.map(route => `
  <url>
    <loc>${route.loc}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  `).join('')}
</urlset>`;

  return sitemap;
}
