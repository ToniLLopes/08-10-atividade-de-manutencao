import React, { useState } from 'react';
import './ProductCard.css';
import TelaConfirmar from './TelaConfirmar';

const ProductCard = ({ product, adicionarAoCarrinho }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  // Encontrar o preço médio
  const priceMedio = product && product.prices
    ? product.prices.find(price => price.size === 'Médio')
    : null;

  // Verificação se o preço médio foi encontrado
  const priceMedioValue = priceMedio ? priceMedio.price.toFixed(2) : '';

  return (
    <div className="col-md-6">
      <div className="card product-card mb-3">
        <div className="row g-0">
          <div className="col-md-4 d-flex align-items-center justify-content-center" style={{ backgroundColor: '#C1000F' }}>
            <img src={product.image} className="img-fluid rounded-start" alt={product.product} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{product.product}</h5>
              <div className="description-price-container" style={{ backgroundColor: 'rgba(234, 148, 83, 0.7)' }}>
                <p className="card-text description">{product.description}</p>
                <p className="card-text price"><strong>R${priceMedioValue}</strong></p>
              </div>
              <button className="btn btn-primary add-to-cart-button font-weight-bold rounded-pill" onClick={handleShowModal}>
                ADICIONAR AO CARRINHO <i className="bi bi-cart-plus" style={{ fontSize: '20px' }}></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <TelaConfirmar show={showModal} handleClose={handleCloseModal} product={product} adicionarAoCarrinho={adicionarAoCarrinho} />
    </div>
  );
};

export default ProductCard;
