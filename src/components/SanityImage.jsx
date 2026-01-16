import React from 'react';
import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '../sanityClient';

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

export default function SanityImage({ image, alt, sizes }) {
  if (!image) {
    return null;
  }

  const src = urlFor(image).width(800).auto('format').url();

  const srcset = [
    `${urlFor(image).width(400).auto('format').url()} 400w`,
    `${urlFor(image).width(800).auto('format').url()} 800w`,
    `${urlFor(image).width(1200).auto('format').url()} 1200w`,
    `${urlFor(image).width(1600).auto('format').url()} 1600w`,
  ].join(', ');

  const defaultSizes = `(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px`;

  return (
    <img
      src={src}
      srcSet={srcset}
      sizes={sizes || defaultSizes}
      alt={alt}
      loading="lazy"
    />
  );
}
