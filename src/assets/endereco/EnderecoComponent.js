import React, { useEffect, useRef } from "react";
import './EnderecoComponent.css';
import pizzariaEndereco from './img/pizzariaEndereco.jpeg';

const EnderecoComponent = () => {
    const mapRef = useRef(null);

    useEffect(() => {
        const loadMapScript = () => {
            const script = document.createElement("script");
            script.src = `https://www.bing.com/api/maps/mapcontrol?callback=GetMap&key=kDfGhJmLpZaNcRtUxVi`;
            script.async = true;
            document.body.appendChild(script);
            window.GetMap = () => {
                const map = new Microsoft.Maps.Map(mapRef.current, {
                    center: new Microsoft.Maps.Location(-27.660849, -48.686123),
                    zoom: 12
                });
                const center = map.getCenter();
                const pin = new Microsoft.Maps.Pushpin(center, {
                    title: 'Localização Personalizada',
                    subTitle: 'Florianópolis',
                    text: '!'
                });
                map.entities.push(pin);
            };
        };

        if (!window.Microsoft || !window.Microsoft.Maps) {
            loadMapScript();
        } else {
            window.GetMap();
        }
    }, []);

    return (
        <div className="container endereco">
            <div className="row">
                <div className="col-md-6">
                    <div className="text-center enderecoText">
                        <h1 className="section-heading mb-4">Endereço:</h1>
                        <div id="myMap" ref={mapRef} style={{ width: '100%', height: '400px' }}></div>
                    </div>
                </div>
                <div className="col-md-6">
                    <img src={pizzariaEndereco} className="imagemPizzaria" alt="Pizzaria Endereço"></img>
                </div>
            </div>
        </div>
    );
};

export default EnderecoComponent;
