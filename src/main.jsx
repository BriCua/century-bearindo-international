import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import App from './App.jsx';
import Beranda from './pages/Beranda.jsx';
import Tentang from './pages/Tentang.jsx';
import Produk from './pages/Produk.jsx';
import Layanan from './pages/Layanan.jsx';
import Katalog from './pages/Katalog.jsx';
import Kontak from './pages/Kontak.jsx';
import Galeri from './pages/Galeri.jsx';
import Karir from './pages/Karir.jsx';
import BlogPage from './pages/blog/BlogPage.jsx';
import BlogPostPage from './pages/blog/BlogPostPage.jsx';
import TrailingSlashEnforcer from './components/TrailingSlashEnforcer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/century-bearindo-international/">
      <TrailingSlashEnforcer>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Beranda />} />
            <Route path="beranda" element={<Navigate to="/" replace />} />
            <Route path="tentang" element={<Tentang />} />
            <Route path="produk" element={<Produk />} />
            <Route path="layanan" element={<Layanan />} />
            <Route path="katalog" element={<Katalog />} />
            <Route path="kontak" element={<Kontak />} />
            <Route path="galeri" element={<Galeri />} />
            <Route path="karir" element={<Karir />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="blog/:slug" element={<BlogPostPage />} />
          </Route>
        </Routes>
      </TrailingSlashEnforcer>
    </BrowserRouter>
  </StrictMode>,
)
