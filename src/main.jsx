import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

import App from './App.jsx';
import Beranda from './pages/Beranda.jsx';
import Tentang from './pages/Tentang.jsx';
import Produk from './pages/Produk.jsx';
import Layanan from './pages/Layanan.jsx';
import Kontak from './pages/Kontak.jsx';
import Karir from './pages/Karir.jsx';
import HighlightsPage from './pages/highlights/HighlightsPage.jsx';
import HighlightsPostPage from './pages/highlights/HighlightsPostPage.jsx';
import TrailingSlashEnforcer from './components/TrailingSlashEnforcer.jsx';

const router = createBrowserRouter([
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
      { path: "highlights", element: <HighlightsPage /> },
      { path: "highlights/:slug", element: <HighlightsPostPage /> },
    ],
  },
], { basename: "/century-bearindo-international/" });

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
