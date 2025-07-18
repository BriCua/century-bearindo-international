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
import Kontak from './pages/Kontak.jsx';
import Karir from './pages/Karir.jsx';
import HighlightsPage from './pages/highlights/HighlightsPage.jsx';
import HighlightsPostPage from './pages/highlights/HighlightsPostPage.jsx';
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
            {/* <Route path="katalog" element={<Katalog />} /> */}
            <Route path="kontak" element={<Kontak />} />
            {/* <Route path="galeri" element={<Galeri />} /> */}
            <Route path="karir" element={<Karir />} />
            <Route path="highlights" element={<HighlightsPage />} />
            <Route path="highlights/:slug" element={<HighlightsPostPage />} />
          </Route>
        </Routes>
      </TrailingSlashEnforcer>
    </BrowserRouter>
  </StrictMode>,
)
