import React from 'react';
import './SkeletonLoader.css';

const SkeletonLoader = () => {
  return (
    <div className="skeleton-container">
      <div className="skeleton-sidebar"></div>
      <div className="skeleton-content">
        <div className="skeleton-title"></div>
        <div className="skeleton-line"></div>
        <div className="skeleton-line"></div>
        <div className="skeleton-line"></div>
        <div className="skeleton-image"></div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
