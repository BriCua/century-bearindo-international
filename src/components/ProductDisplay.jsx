import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import '../partials/produk/produk.css';
import AnimatedContent from '../components/animations/AnimatedContent';

export default function ProductDisplay() {
  const [searchParams, setSearchParams] = useSearchParams();
  const openItemId = searchParams.get('open');

  const selectedProduct = products.find(p => p.id === openItemId) || products[0];

  const handleCategoryClick = (event, productId) => {
    event.preventDefault();
    setSearchParams({ open: productId });
  };

  return (
    <div className="product-display-container">
      <aside className="product-sidebar">
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
            Kategori Produk
          </li>
          {products.map(product => (
            <li key={product.id} className={` bg-[fff] ${selectedProduct.id === product.id ? 'active' : ''}`}>
              <a 
                href={`/produk?open=${product.id}`} 
                onClick={(e) => handleCategoryClick(e, product.id)}
              >
                {product.title}
              </a>
            </li>
          ))}
        </ul>
        </AnimatedContent>
      </aside>
      <main className="product-content ">
        <AnimatedContent
          key={selectedProduct.id}
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
        <h2>{selectedProduct.title}</h2>
        <hr className=' border-[#e60000] border-[1.5px] mb-6'></hr>
        <div className="product-text">
          {selectedProduct.text.map((paragraph, index) => (
            <p className="mb-2"key={index}>{paragraph}</p>
          ))}
        </div>
        <div className="product-images">
          {selectedProduct.images.map((image, index) => (
            <img key={index} src={image} alt={`${selectedProduct.title} image ${index + 1}`} />
          ))}
        </div>
        </AnimatedContent>
      </main>
    </div>
  );
}