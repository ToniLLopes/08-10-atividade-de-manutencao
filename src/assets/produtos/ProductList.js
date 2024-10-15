import React from 'react';
import ProductCard from './ProductCard';  // Importa o componente ProductCard
import products from './Products';  // Importa o array de produtos

const ProductList = ({ adicionarAoCarrinho }) => {
  return (
    <div className="row">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} adicionarAoCarrinho={adicionarAoCarrinho} />
      ))}
    </div>
  );
};

export default ProductList;
