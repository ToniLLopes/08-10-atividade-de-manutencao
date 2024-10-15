import React, { useState, useEffect } from 'react';
import './TelaConfirmar.css';

const TelaConfirmar = ({ show, handleClose, product, adicionarAoCarrinho }) => {
  const [size, setSize] = useState('Médio');
  const [quantity, setQuantity] = useState(1);
  const [observations, setObservations] = useState('');

  useEffect(() => {
    // Definir o tamanho padrão ao abrir o modal
    if (product && product.prices) {
      // Verificar se 'Médio' está disponível nos preços
      const mediumSize = product.prices.find((priceOption) => priceOption.size === 'Médio');
      if (mediumSize) {
        setSize('Médio');
      } else {
        // Caso 'Médio' não esteja disponível, definir o primeiro tamanho como padrão
        setSize(product.prices[0].size);
      }
    }
  }, [product]);

  const handleSizeChange = (e) => setSize(e.target.value);
  const handleQuantityChange = (e) => {
    const value = Math.max(1, Math.min(99, e.target.value));
    setQuantity(value);
  };
  const handleObservationsChange = (e) => setObservations(e.target.value);

  const handleConcluirPedido = () => {
    // Encontrar o preço correto baseado no tamanho selecionado
    const selectedPrice = product.prices.find((priceOption) => priceOption.size === size)?.price || 0;
    adicionarAoCarrinho(product, size, selectedPrice * quantity, observations); // Chama a função adicionarAoCarrinho para adicionar o produto ao carrinho
    handleClose(); // Fecha a tela de TelaConfirmar
  };

  const handleContinuarComprando = () => {
    // Encontrar o preço correto baseado no tamanho selecionado
    const selectedPrice = product.prices.find((priceOption) => priceOption.size === size)?.price || 0;
    adicionarAoCarrinho(product, size, selectedPrice * quantity, observations); // Chama a função adicionarAoCarrinho para adicionar o produto ao carrinho
    handleClose(); // Fecha a tela de TelaConfirmar
  };

  return (
    <div className={`modal fade ${show ? 'show d-block' : 'd-none'}`} tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-dialog-centered modal-dialog-mobile" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{product?.product}</h5>
            <button type="button" className="close-button" onClick={handleClose}>
              <i className="bi bi-x"></i>
            </button>
          </div>
          <div className="modal-body">
            {product && product.prices && (
              <div className="form-group">
                <label>Tamanho</label>
                {product.prices.map((sizeOption) => (
                  <div key={sizeOption.size} className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="size"
                      value={sizeOption.size}
                      checked={size === sizeOption.size}
                      onChange={handleSizeChange}
                    />
                    <label className="form-check-label">
                      {`${sizeOption.size} R$${sizeOption.price.toFixed(2)}`}
                    </label>
                  </div>
                ))}
              </div>
            )}
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
            <div className="form-group d-flex align-items-center">
              <label className="mr-2 mb-0">Quantidade:</label>
              <input
                type="number"
                className="form-control form-control-quantity text-center"
                min="1"
                max="99"
                value={quantity}
                onChange={handleQuantityChange}
                style={{ width: '60px' }}
              />
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary button-secondary mr-2" onClick={handleContinuarComprando}>
              Continuar Comprando
            </button>
            <button type="button" className="btn btn-primary button-primary ml-2" onClick={handleConcluirPedido}>
              Concluir Pedido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TelaConfirmar;
