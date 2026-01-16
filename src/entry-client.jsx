import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './router';

const router = createBrowserRouter(routes);

hydrateRoot(document.getElementById('root'),
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
