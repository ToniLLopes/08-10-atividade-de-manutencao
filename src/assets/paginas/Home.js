import React from "react";
import BannerComponent from "../banner/BannerComponent";
import NavbarComponent from "../navbar/NavbarComponent";
import SobreComponent from "../sobre/SobreComponent";
import EnderecoComponent from "../endereco/EnderecoComponent";
import ContatoComponent from "../contato/ContatoComponent";
import './Home.css';

const Home = () => {
  return (
    <div className="Home">
      <header>
        <NavbarComponent />
      </header>
      <div className="container-fluid mt-5">
        <BannerComponent />
        <div id="sobre">
          <SobreComponent />
        </div>
        <div id="contato">
          <ContatoComponent />
        </div>
        <div id="endereco">
          <EnderecoComponent />
        </div>
      </div>
    </div>
  );
};

export default Home;
