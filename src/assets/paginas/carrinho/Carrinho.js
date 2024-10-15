// Carrinho.js

import React from 'react';
import ItemCarrinho from './ItemCarrinho';
import { calcularTotal } from './utils';

const Carrinho = ({ itensCarrinho }) => {
  // Verifica se itensCarrinho é uma array antes de acessar map
  const total = Array.isArray(itensCarrinho) ? calcularTotal(itensCarrinho) : 0;

  return (
    <div className="container mt-5">
      <h2>Itens no Carrinho</h2>
      {/* Verifica se itensCarrinho é uma array e se tem itens dentro */}
      {Array.isArray(itensCarrinho) && itensCarrinho.length === 0 ? (
        <p>Carrinho vazio</p>
      ) : (
        <div>
          {/* Mapeia os itens do carrinho apenas se itensCarrinho for uma array */}
          {itensCarrinho.map((item, index) => (
            <ItemCarrinho key={index} item={item} />
          ))}
          <h4>Total: R${total.toFixed(2)}</h4>
          <button className="btn btn-primary mr-2">Continuar Comprando</button>
          <a href="/Carrinho" className="btn btn-success">Concluir Pedido</a>
        </div>
      )}
    </div>
  );
};

export default Carrinho;
