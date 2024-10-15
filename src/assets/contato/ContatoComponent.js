import React from "react";
import './ContatoComponent.css'

const ContatoComponent = () => {
    return(
    <div class="container-fluid contact-section">
    <div class="container contato">
      <div class="row text-center mb-5 full-width-background" >
        <div class="col">
          <h1>Fale Conosco!!</h1>
          <h3>WHATSAPP (48) 3456-7890 <br></br>
            CONTATO@SAPOREDIPIZZA.COM.BR</h3>  
        </div>
      </div>
      <div className="contatolegenda"><h2>Siga-nos nas Redes Sociais. Fique por dentro das nossas novidades, promoções e eventos especiais😊</h2>
      </div>
      <div class="row">
        <div class="col-md-4 contact-info">
          <h4><i class="bi bi-instagram"></i> Instagram: @saporedi_pizza </h4>
          <h4><i class="bi bi-facebook"></i> Facebook: Sapore di Pizza</h4>
          <h4><i class="bi bi-twitter-x"></i> Twitter: @saporedi_pizza</h4>
          <h4><i class="bi bi-tiktok"></i> TikTok: @saporedi_pizza</h4>
          <h4><i class="bi bi-youtube"></i> YouTube: Sapore di Pizza </h4>
          <h4><i class="bi bi-pinterest"></i> Pinterest: Sapore di Pizza</h4>
        </div>
      </div>
    </div>
  </div>
);
};

// Instagram: @saporedi_pizza 
// Facebook: Sapore di Pizza
// Twitter: @saporedi_pizza
// TikTok: @saporedi_pizza
// YouTube: Sapore di Pizza 
// Pinterest: Sapore di Pizza

export default ContatoComponent;