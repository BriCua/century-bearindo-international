import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import sanityClient from '../sanityClient';
import '../partials/layanan/layanan.css';
import AnimatedContent from '../components/animations/AnimatedContent';
import SkeletonLoader from './animations/SkeletonLoader';

export default function LayananDisplay() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [services, setServices] = useState([]);
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

  return (
    <div className="layanan-display-container">
      <aside className="layanan-sidebar">
        <AnimatedContent
          key="sidebar"
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
            <li key={l._id} className={` bg-[fff] ${selectedLayanan._id === l._id ? 'active' : ''}`}>
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
        </AnimatedContent>
      </aside>
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
        <h2>{selectedLayanan.name}</h2>
        <hr className=' border-[#e60000] border-[1.5px] mb-6'></hr>
        <div className="layanan-text">
          {selectedLayanan.desc.split('\n').map((paragraph, index) => (
            <p className="mb-4"key={index}>{paragraph}</p>
          ))}
        </div>
        <div className="layanan-images">
          {Array.isArray(selectedLayanan.images) && selectedLayanan.images.map((imageUrl, index) => (
            <img key={index} src={imageUrl} alt={`${selectedLayanan.name} image ${index + 1}`} />
          ))}
        </div>
        </AnimatedContent>
      </main>
    </div>
  );
}