import React from 'react';

function ProductCard({ flower }) {
  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img 
          src={flower.image} 
          alt={flower.name}
          className="product-image"
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/400x400/6C4E7A/FFFFFF?text=🌸';
          }}
        />
        {flower.inStock && <span className="badge">✨ Fresh</span>}
      </div>
      <div className="product-content">
        <h3 className="product-name">{flower.name}</h3>
        <span className="product-category">{flower.category}</span>
        <div className="product-price">{flower.price}</div>
        <span className={`product-stock ${flower.inStock ? 'in-stock' : 'out-of-stock'}`}>
          {flower.inStock ? '✅ In Stock' : '❌ Out of Stock'}
        </span>
      </div>
    </div>
  );
}

export default ProductCard;