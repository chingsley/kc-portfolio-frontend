import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const LazyLoadImg = ({ src, alt, className }) => {
  return <LazyLoadImage src={src} alt={alt} className={className} />;
};

export default LazyLoadImg;
