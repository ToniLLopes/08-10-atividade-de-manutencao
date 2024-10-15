import React from "react";
import './SobreComponent.css';  // Importar o arquivo CSS
import pizzaForno from "./imgs/pizzaForno.png";

const SobreComponent = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <img src={pizzaForno} alt="Pizza no forno" className="img-fluid" />
        </div>
        <div className="col-md-6 offset-md-1">
          <p className="lead">
            Bem-vindo à Sapore di Pizza, onde cada pedaço é uma celebração do autêntico sabor italiano! Desde 1955, trazemos a verdadeira essência da Itália em nossas pizzas artesanais, localizados no coração da cidade.
            <br /><br />
            Nossa paixão pela culinária italiana nos inspirou a criar um menu que combina receitas tradicionais com ingredientes frescos e de alta qualidade. Das clássicas Margherita e Quattro Stagioni às nossas criações exclusivas, cada pizza é preparada com cuidado e carinho.
            <br /><br />
            Buon appetito!
          </p>
        </div>
      </div>
    </div>
  );
}

export default SobreComponent;
