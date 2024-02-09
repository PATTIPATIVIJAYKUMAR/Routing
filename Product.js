import React from 'react';

function Product({ product }) {
  const handleAddToCart = () => {
    console.log(`Added ${product.name} to cart`);
  };

  return (
    <div>
      <p>{product.name} - ${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;