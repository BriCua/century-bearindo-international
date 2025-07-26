import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { layanan } from '../data/layanan';
import '../partials/layanan/layanan.css';
import AnimatedContent from '../components/animations/AnimatedContent';

export default function LayananDisplay() {
  const [searchParams, setSearchParams] = useSearchParams();
  const openItemId = searchParams.get('open');

  const selectedLayanan = layanan.find(l => l.id === openItemId) || layanan[0];

  const handleCategoryClick = (event, layananId) => {
    event.preventDefault();
    setSearchParams({ open: layananId });
  };

  return (
    <div className="layanan-display-container">
      <aside className="layanan-sidebar">
        <AnimatedContent
          distance={150}
          direction="horizontal"
          reverse={true}
          duration={0.5}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.2}
          delay={0}
        >
        <ul>
          <li>
            Kategori Layanan
          </li>
          {layanan.map(l => (
            <li key={l.id} className={` bg-[fff] ${selectedLayanan.id === l.id ? 'active' : ''}`}>
              <a 
                href={`/layanan?open=${l.id}`} 
                onClick={(e) => handleCategoryClick(e, l.id)}
              >
                {l.title}
              </a>
            </li>
          ))}
        </ul>
        </AnimatedContent>
      </aside>
      <main className="layanan-content ">
        <AnimatedContent
          key={selectedLayanan.id}
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
        <h2>{selectedLayanan.title}</h2>
        <hr className=' border-[#e60000] border-[1.5px] mb-6'></hr>
        <div className="layanan-text">
          {selectedLayanan.text.map((paragraph, index) => (
            <p className="mb-2"key={index}>{paragraph}</p>
          ))}
        </div>
        <div className="layanan-images">
          {selectedLayanan.images.map((image, index) => (
            <img key={index} src={image} alt={`${selectedLayanan.title} image ${index + 1}`} />
          ))}
        </div>
        </AnimatedContent>
      </main>
    </div>
  );
}