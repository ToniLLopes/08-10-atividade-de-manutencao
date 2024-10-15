import React from 'react';
import './NavbarComponent.css'; // Importe o CSS personalizado
import logoSaporeDiPizza from './logoSaporeDiPizza.png'; // Importe o logotipo

const NavbarComponent = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-background">
      <div className="container-fluid">
        <a className="navbar-brand logo" href="/">
          <img src={logoSaporeDiPizza} alt="Sapore di pizza" className="logo-image" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="d-flex w-100 justify-content-between">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/" onClick={() => scrollToSection('sobre')}>
                  Sobre nós
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" onClick={() => scrollToSection('endereco')}>
                  Endereço
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" onClick={() => scrollToSection('contato')}>
                  Contato
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Cardapio">Cardápio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Carrinho">
                  <i className="bi bi-cart-plus" style={{ fontSize: '20px' }}></i>
                  Carrinho
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavbarComponent;
