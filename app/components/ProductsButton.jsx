// app/components/ProductsButton.jsx
import React from 'react';

const ProductsButton = () => {
  return (
    <div className="flex justify-center mt-4">
      <button className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded animate-pulse bg-center text-4xl">
        Consulter plus de produits...
      </button>
    </div>
  );
};

export default ProductsButton;