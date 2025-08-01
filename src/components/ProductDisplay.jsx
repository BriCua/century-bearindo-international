import { PortableText } from '@portabletext/react';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import sanityClient from '../sanityClient';
import '../partials/produk/produk.css';
import AnimatedContent from '../components/animations/AnimatedContent';
import SkeletonLoader from './animations/SkeletonLoader';

export default function ProductDisplay() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const openItemId = searchParams.get('open');

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "product"] | order(_createdAt asc){
          _id,
          name,
          "images": image.asset->url,
          desc
        }`
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
      <aside className="product-sidebar">
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
            Kategori Produk
          </li>
          {products.map((product) => (     
            <li key={product._id} className={` bg-[fff] ${selectedProduct._id === product._id ? 'active' : ''}`}>
              <a 
                href={`/produk?open=${product._id}`} 
                onClick={(e) => handleCategoryClick(e, product._id)}
              >
                {product.name}
              </a>
            </li>
          ))}
          <li className="produk-item-decor"></li>
        </ul>
        </AnimatedContent>
      </aside>
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
        <h2>{selectedProduct.name}</h2>
        <hr className=' border-[#e60000] border-[1.5px] mb-6'></hr>
        <div className="product-text">
          {selectedProduct.desc.split('\n').map((paragraph, index) => (
            <p className="mb-4" key={index}>{paragraph}</p>
          ))}
        </div>
        <div className="product-images mt-8">
          <img src={selectedProduct.images} alt={`${selectedProduct.name} image`} />
        </div>
        </AnimatedContent>
      </main>
    </div>
  );
}