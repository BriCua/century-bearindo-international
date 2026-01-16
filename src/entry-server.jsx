import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import ReactDOMServer from 'react-dom/server';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { routes } from './router';

// This function remains as your core rendering logic
export function render(url) {
  const router = createMemoryRouter(routes, {
    initialEntries: [url],
  });

  const html = ReactDOMServer.renderToString(
    <RouterProvider router={router} />
  );

  return { html };
}

// This is the new Netlify Function handler
export async function handler(event) {
  try {
    const url = new URL(event.rawUrl).pathname;

    // --- FIX: Use the canonical way to get the current directory in an ES module ---
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    
    // In a Netlify environment, the built template will be in the parent directory
    // of the function. dist/client/index.html relative to dist/server/entry-server.js
    const template = fs.readFileSync(
      path.resolve(__dirname, '../client/index.html'),
      'utf-8'
    );
    
    const { html: appHtml } = render(url);

    const html = template.replace(`<!--ssr-outlet-->`, appHtml);

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'text/html' },
      body: html,
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: `<h1>Server Error</h1><p>${error.message}</p><pre>${error.stack}</pre>`,
    };
  }
}
