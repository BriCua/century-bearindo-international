import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

import App from './App.jsx';
import Beranda from './pages/Beranda.jsx';
import TrailingSlashEnforcer from './components/TrailingSlashEnforcer.jsx';

// Lazy load route components for code splitting
const Tentang = lazy(() => import('./pages/Tentang.jsx'));
const Produk = lazy(() => import('./pages/Produk.jsx'));
const Layanan = lazy(() => import('./pages/Layanan.jsx'));
const Kontak = lazy(() => import('./pages/Kontak.jsx'));
const Karir = lazy(() => import('./pages/Karir.jsx'));
const HighlightsPage = lazy(() => import('./pages/highlights/HighlightsPage.jsx'));
const HighlightsPostPage = lazy(() => import('./pages/highlights/HighlightsPostPage.jsx'));

// Loading component for Suspense fallback
const PageLoader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200px' }}>
    <div>Loading...</div>
  </div>
);

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
      { 
        path: "tentang", 
        element: <Suspense fallback={<PageLoader />}><Tentang /></Suspense> 
      },
      { 
        path: "produk", 
        element: <Suspense fallback={<PageLoader />}><Produk /></Suspense> 
      },
      { 
        path: "layanan", 
        element: <Suspense fallback={<PageLoader />}><Layanan /></Suspense> 
      },
      { 
        path: "kontak", 
        element: <Suspense fallback={<PageLoader />}><Kontak /></Suspense> 
      },
      { 
        path: "karir", 
        element: <Suspense fallback={<PageLoader />}><Karir /></Suspense> 
      },
      { 
        path: "highlights", 
        element: <Suspense fallback={<PageLoader />}><HighlightsPage /></Suspense> 
      },
      { 
        path: "highlights/:slug", 
        element: <Suspense fallback={<PageLoader />}><HighlightsPostPage /></Suspense> 
      },
    ],
  },
], { basename: "/century-bearindo-international/" });

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
