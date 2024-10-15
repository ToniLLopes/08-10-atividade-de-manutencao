import React, { useState } from 'react';
import './ItemCarrinho.css'; // Importe o CSS personalizado se necessário

const ItemCarrinho = ({ item, priceMedioValue, onObservationsChange }) => {
  const [observations, setObservations] = useState('');

  const handleObservationsChange = (event) => {
    setObservations(event.target.value);
    onObservationsChange(item, event.target.value);
  };

  return (
    <div className="col-md-6">
      <div className="card product-card mb-3">
        <div className="row g-0">
          <div className="col-md-4 d-flex align-items-center justify-content-center" style={{ backgroundColor: '#C1000F' }}>
            <img src={item.product.image} className="img-fluid rounded-start" alt={item.product.name} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{item.product.name}</h5>
              <div className="description-price-container" style={{ backgroundColor: 'rgba(234, 148, 83, 0.7)' }}>
                <p className="card-text description">{item.product.description}</p>
                <p className="card-text price"><strong>R${priceMedioValue}</strong></p>

                <div className="form-group">
                  <label className="mb-0">Observações:</label>
                  <div className="d-flex align-items-center">
                    <div className="input-group input-group-observations">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="bi bi-pencil-square"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control form-control-observations"
                        placeholder="Adicione suas observações aqui"
                        value={observations}
                        onChange={handleObservationsChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCarrinho;
