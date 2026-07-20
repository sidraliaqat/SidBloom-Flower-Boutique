import React from 'react';
import ProductCard from './ProductCard';
import NoResults from './NoResults';

function ProductGrid({ flowers }) {
  if (flowers.length === 0) {
    return <NoResults />;
  }

  return (
    <div className="product-grid">
      {flowers.map(flower => (
        <ProductCard key={flower.id} flower={flower} />
      ))}
    </div>
  );
}

export default ProductGrid;