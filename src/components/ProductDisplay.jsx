import { PortableText } from '@portabletext/react';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import sanityClient from '../sanityClient';
import '../partials/produk/produk-new.css';
import AnimatedContent from '../components/animations/AnimatedContent';
import SkeletonLoader from './animations/SkeletonLoader';

export default function ProductDisplay() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const openItemId = searchParams.get('open');

  useEffect(() => {
    sanityClient
      .fetch(
                `*[_type == "product"] | order(_createdAt asc){_id, name, "images": images[].asset->url, desc}`
      )
      .then((data) => setProducts(data))
      .catch(console.error);
  }, []);

  if (!products.length) {
    return <SkeletonLoader />;
  }

  const selectedProduct = products.find(p => p._id === openItemId) || products[0];

  const handleCategoryClick = (event, productId) => {
    event.preventDefault();
    setSearchParams({ open: productId });
  };

  return (
    <div className="product-display-container">
      {/* Main Menu Sidebar - Always First */}
      <aside className="product-sidebar-menu">
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
            Kategori Produk
          </li>
          {products.map((product) => (
            <li key={product._id} className={`${selectedProduct._id === product._id ? 'active' : ''}`}>
              <a 
                href={`/produk?open=${product._id}`} 
                onClick={(e) => handleCategoryClick(e, product._id)}
              >
                {product.name}
              </a>
            </li>
          ))}
          <li className="product-item-decor"></li>
        </ul>
        
        {/* Desktop sidebar extras - hidden on mobile */}
        <div className="product-sidebar-extra-desktop">
          <div className="product-help-section">
            <h4 className="product-help-title">Butuh Bantuan?</h4>
            <p className="product-help-text">
              Tim ahli kami siap membantu Anda menemukan produk bearing dan komponen industri yang tepat sesuai kebutuhan.
            </p>
            <div className="product-help-actions">
              <a href="/kontak" className="product-cta-primary">
                Konsultasi Gratis
              </a>
              <a href="tel:(031) 5357878" className="product-cta-secondary">
                Hubungi Kami
              </a>
            </div>
          </div>
          
          <div className="product-features">
            <div className="product-feature">
              <span className="product-feature-icon">⚙️</span>
              <span>Kualitas Terjamin</span>
            </div>
            <div className="product-feature">
              <span className="product-feature-icon">🚚</span>
              <span>Pengiriman Cepat</span>
            </div>
            <div className="product-feature">
              <span className="product-feature-icon">💰</span>
              <span>Harga Kompetitif</span>
            </div>
          </div>
        </div>
        </AnimatedContent>
      </aside>
      
      {/* Main Content */}
      <main className="product-content ">
        <AnimatedContent
          key={selectedProduct._id}
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
        <div className="product-header">
          <h2>{selectedProduct.name}</h2>
          <hr className='border-[#e60000] border-[1.5px] mb-6'></hr>
        </div>
        
        {/* Text Content with Background */}
        <div className="product-main-content">
          <div className="product-text">
            {selectedProduct.desc.split('\n').map((paragraph, index) => (
              <p className="mt-4 mb-4" key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
        
        {/* Images Outside Container */}
        <div className="product-images-external">
          {Array.isArray(selectedProduct.images) && selectedProduct.images.map((imageUrl, index) => (
            <img key={index} src={imageUrl} alt={`${selectedProduct.name} image ${index + 1}`} loading="lazy" />
          ))}
        </div>
        
        {/* Desktop CTA Section */}
        <div className="product-cta-section product-cta-desktop">
          <div className="product-cta-content">
            <h3>Tertarik dengan produk ini?</h3>
            <p>Hubungi tim kami untuk informasi lebih lanjut dan penawaran terbaik sesuai kebutuhan Anda.</p>
            <div className="product-cta-buttons">
              <a href="/katalog" className="product-btn-primary">
                Lihat Katalog
              </a>
              <a href={`/kontak?product=${encodeURIComponent(selectedProduct.name)}`} className="product-btn-secondary">
                Konsultasi Teknis
              </a>
            </div>
          </div>
        </div>
        </AnimatedContent>
      </main>
      
      {/* CTA Section - Third on Mobile */}
      <section className="product-cta-section-mobile">
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
        <div className="product-cta-section">
          <div className="product-cta-content">
            <h3>Tertarik dengan produk ini?</h3>
            <p>Hubungi tim kami untuk informasi lebih lanjut dan penawaran terbaik sesuai kebutuhan Anda.</p>
            <div className="product-cta-buttons">
              <a href="/katalog" className="product-btn-primary">
                Lihat Katalog
              </a>
              <a href={`/kontak?product=${encodeURIComponent(selectedProduct.name)}`} className="product-btn-secondary">
                Konsultasi Teknis
              </a>
            </div>
          </div>
        </div>
        </AnimatedContent>
      </section>
      
      {/* Help Section - Fourth on Mobile */}
      <aside className="product-sidebar-help">
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
        <div className="product-help-section">
          <h4 className="product-help-title">Butuh Bantuan?</h4>
          <p className="product-help-text">
            Tim ahli kami siap membantu Anda menemukan produk bearing dan komponen industri yang tepat sesuai kebutuhan.
          </p>
          <div className="product-help-actions">
            <a href="/kontak" className="product-cta-primary">
              Konsultasi Gratis
            </a>
            <a href="tel:(031) 5357878" className="product-cta-secondary">
              Hubungi Kami
            </a>
          </div>
        </div>
        </AnimatedContent>
      </aside>
      
      {/* Features Section - Last */}
      <section className="product-features-section">
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
        <div className="product-features">
          <div className="product-feature">
            <span className="product-feature-icon">⚙️</span>
            <span>Kualitas Terjamin</span>
          </div>
          <div className="product-feature">
            <span className="product-feature-icon">🚚</span>
            <span>Pengiriman Cepat</span>
          </div>
          <div className="product-feature">
            <span className="product-feature-icon">💰</span>
            <span>Harga Kompetitif</span>
          </div>
        </div>
        </AnimatedContent>
      </section>
    </div>
  );
}