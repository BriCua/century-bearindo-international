import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url'; // Keep for other uses if any, but not for this specific path
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

    // --- FIX: Use a robust path relative to the function's working directory ---
    const template = fs.readFileSync(
      path.resolve(process.cwd(), 'dist/client/index.html'),
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
