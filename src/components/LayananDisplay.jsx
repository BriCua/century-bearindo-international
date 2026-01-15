import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import sanityClient from '../sanityClient';
import '../partials/layanan/layanan.css';
import AnimatedContent from '../components/animations/AnimatedContent';
import SkeletonLoader from './animations/SkeletonLoader';

export default function LayananDisplay() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [services, setServices] = useState([]);
  const navigate = useNavigate();
  const openItemId = searchParams.get('open');

  useEffect(() => {
    sanityClient
      .fetch(
                `*[_type == "service"] | order(_createdAt asc){_id, name, "images": images[].asset->url, desc}`
      )
      .then((data) => setServices(data))
      .catch(console.error);
  }, []);

  if (!services.length) {
    return <SkeletonLoader />;
  }

  const selectedLayanan = services.find(l => l._id === openItemId) || services[0];

  const handleCategoryClick = (event, layananId) => {
    event.preventDefault();
    setSearchParams({ open: layananId });
  };
  
  // Helper function to convert service name to URL-friendly subcategory
  const getSubcategorySlug = (serviceName) => {
    return serviceName
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace('alat - ', 'alat-');
  };
  
  const handleContohClick = (event) => {
    event.preventDefault();
    const subcategory = getSubcategorySlug(selectedLayanan.name);
    navigate(`/highlights?category=layanan&subcategory=${subcategory}`);
  };

  return (
    <div className="layanan-display-container">
      {/* Main Menu Sidebar - Always First */}
      <aside className="layanan-sidebar-menu">
        <AnimatedContent
          key="sidebar-menu"
          distance={150}
          direction="horizontal"
          reverse={true}
          duration={0.5}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          triggerOnScroll={false}
        >
        <ul>
          <li>
            Kategori Layanan
          </li>
          {services.map(l => (
            <li key={l._id} className={`${selectedLayanan._id === l._id ? 'active' : ''}`}>
              <a 
                href={`/layanan?open=${l._id}`} 
                onClick={(e) => handleCategoryClick(e, l._id)}
              >
                {l.name}
              </a>
            </li>
          ))}
          <li className="layanan-item-decor"></li>
        </ul>
        
        {/* Desktop sidebar extras - hidden on mobile */}
        <div className="layanan-sidebar-extra-desktop">
          <div className="layanan-help-section">
            <h4 className="layanan-help-title">Butuh Bantuan?</h4>
            <p className="layanan-help-text">
              Tim ahli kami siap membantu Anda menemukan solusi terbaik untuk kebutuhan bearing dan komponen industri.
            </p>
            <div className="layanan-help-actions">
              <a href="/kontak" className="layanan-cta-primary">
                Konsultasi Gratis
              </a>
              <a href="tel:(031) 5357878" className="layanan-cta-secondary">
                Hubungi Kami
              </a>
            </div>
          </div>
          
          <div className="layanan-features">
            <div className="layanan-feature">
              <span className="layanan-feature-icon">⚡</span>
              <span>Respons Cepat</span>
            </div>
            <div className="layanan-feature">
              <span className="layanan-feature-icon">🔧</span>
              <span>Tim Berpengalaman</span>
            </div>
            <div className="layanan-feature">
              <span className="layanan-feature-icon">📞</span>
              <span>Support 24/7</span>
            </div>
          </div>
        </div>
        </AnimatedContent>
      </aside>
      
      {/* Main Content */}
      <main className="layanan-content ">
        <AnimatedContent
          key={selectedLayanan._id}
          distance={150}
          direction="horizontal"
          reverse={false}
          duration={0.5}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.2}
          delay={0}
        >
        {/* Header Section */}
        <div className="layanan-header">
          <h2>{selectedLayanan.name}</h2>
          <hr className='border-[#e60000] border-[1.5px] mb-6'></hr>
        </div>
        
        {/* Text Content with White Background */}
        <div className="layanan-main-content">
          <div className="layanan-text">
            {selectedLayanan.desc.split('\n').map((paragraph, index) => (
              <p className="mt-4 mb-4" key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
        
        {/* Images Outside White Container */}
        <div className="layanan-images-external">
          {Array.isArray(selectedLayanan.images) && selectedLayanan.images.map((imageUrl, index) => (
            <img key={index} src={imageUrl} alt={`${selectedLayanan.name} image ${index + 1}`} loading="lazy" />
          ))}
        </div>
        
        {/* Desktop CTA Section */}
        <div className="layanan-cta-section layanan-cta-desktop">
          <div className="layanan-cta-content">
            <h3>Tertarik dengan layanan ini?</h3>
            <p>Hubungi tim kami untuk konsultasi lebih lanjut dan penawaran terbaik sesuai kebutuhan Anda.</p>
            <div className="layanan-cta-buttons">
              <button onClick={handleContohClick} className="layanan-btn-primary">
                Contoh
              </button>
              <a href={`/kontak?service=${encodeURIComponent(selectedLayanan.name)}`} className="layanan-btn-secondary">
                Konsultasi Teknis
              </a>
            </div>
          </div>
        </div>
        </AnimatedContent>
      </main>
      
      {/* CTA Section - Third on Mobile */}
      <section className="layanan-cta-section-mobile">
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={false}
          duration={0.5}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.2}
          delay={0.1}
        >
        <div className="layanan-cta-section">
          <div className="layanan-cta-content">
            <h3>Tertarik dengan layanan ini?</h3>
            <p>Hubungi tim kami untuk konsultasi lebih lanjut dan penawaran terbaik sesuai kebutuhan Anda.</p>
            <div className="layanan-cta-buttons">
              <button onClick={handleContohClick} className="layanan-btn-primary">
                Contoh
              </button>
              <a href={`/kontak?service=${encodeURIComponent(selectedLayanan.name)}`} className="layanan-btn-secondary">
                Konsultasi Teknis
              </a>
            </div>
          </div>
        </div>
        </AnimatedContent>
      </section>
      
      {/* Help Section - Fourth on Mobile */}
      <aside className="layanan-sidebar-help">
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={false}
          duration={0.5}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.2}
          delay={0.2}
        >
        <div className="layanan-help-section">
          <h4 className="layanan-help-title">Butuh Bantuan?</h4>
          <p className="layanan-help-text">
            Tim ahli kami siap membantu Anda menemukan solusi terbaik untuk kebutuhan bearing dan komponen industri.
          </p>
          <div className="layanan-help-actions">
            <a href="/kontak" className="layanan-cta-primary">
              Konsultasi Gratis
            </a>
            <a href="tel:(031) 5357878" className="layanan-cta-secondary">
              Hubungi Kami
            </a>
          </div>
        </div>
        </AnimatedContent>
      </aside>
      
      {/* Features Section - Last */}
      <section className="layanan-features-section">
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={false}
          duration={0.5}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.2}
          delay={0.3}
        >
        <div className="layanan-features">
          <div className="layanan-feature">
            <span className="layanan-feature-icon">⚡</span>
            <span>Respons Cepat</span>
          </div>
          <div className="layanan-feature">
            <span className="layanan-feature-icon">🔧</span>
            <span>Tim Berpengalaman</span>
          </div>
          <div className="layanan-feature">
            <span className="layanan-feature-icon">📞</span>
            <span>Support 24/7</span>
          </div>
        </div>
        </AnimatedContent>
      </section>
    </div>
  );
}