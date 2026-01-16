import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { generateSitemap } from './server/sitemap.js'; // Import sitemap generator

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function createServer() {
  const app = express();
  let vite;

  if (process.env.NODE_ENV === 'production') {
    app.use((await import('serve-static')).default(path.resolve(__dirname, 'dist/client'), {
      index: false
    }));
  } else {
    // Create Vite server in development mode.
    vite = await (await import('vite')).createServer({
      server: { middlewareMode: true },
      appType: 'custom'
    });

    // use vite's connect instance as middleware
    app.use(vite.middlewares);
  }

  // Sitemap route - MUST be before the catch-all SSR handler
  app.get('/sitemap.xml', async (req, res) => {
    try {
      const sitemap = await generateSitemap();
      res.header('Content-Type', 'application/xml');
      res.send(sitemap);
    } catch (e) {
      console.error('Error generating sitemap:', e);
      res.status(500).send('Error generating sitemap');
    }
  });
  
  app.use(async (req, res) => { // Changed from app.all('*', ...)
    try {
      const url = req.originalUrl;
      let template;
      let render;

      if (process.env.NODE_ENV === 'production') {
        template = fs.readFileSync(path.resolve(__dirname, 'dist/client/index.html'), 'utf-8');
        render = (await import('./dist/server/entry-server.js')).render;
      } else {
        template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        render = (await vite.ssrLoadModule('/src/entry-server.jsx')).render;
      }

      const { html: appHtml } = await render(url);

      const html = template.replace(`<!--ssr-outlet-->`, appHtml);

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      if(vite) vite.ssrFixStacktrace(e);
      console.log(e.stack);
      res.status(500).end(e.stack);
    }
  });

  app.listen(5173, () => {
    console.log('http://localhost:5173');
  });
}

createServer();
