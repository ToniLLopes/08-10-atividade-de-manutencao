import React from "react";
import './EnderecoComponent.css'
import pizzariaEndereco from './img/pizzariaEndereco.jpeg'

const EnderecoComponent = () => {
    return(
        <div class="container endereco">
            <div class="row">
                <div class="col-md-6">
                    <div class="text-center enderecoText">
                        <h1 class="section-heading mb-4">Endereço:</h1>
                        <p class="mb-4"><i class="bi bi-geo-alt-fill"></i> Avenida San Giovanni, 2345, Bairro Bella Vista, Florianópolis, SC, 88040-222</p>
                        <iframe class="embed-responsive-item mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.7637278625623!2d-122.41938728465923!3d37.77492967976009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858094bb8e47b9%3A0x6bbf4b43d09d01d7!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2suk!4v1623788608758!5m2!1sen!2suk" allowfullscreen></iframe>
                    </div>
                </div>
                <div class="col-md-6">
                       <img src={pizzariaEndereco} className="imagemPizzaria"></img>
                </div>
            </div>
        </div>

    );    
       
};
export default EnderecoComponent;