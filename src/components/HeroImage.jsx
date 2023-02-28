import React from "react";
//Estilos
import "../estilos/heroImage.css";

const HeroImage = () => {
  return (
    <>
      <div className="contenedor-img">
      <div className="content">
          <div className="visible">
            <p className="p">Hola!</p>
            <ul className="ul">
              <li className="it">
                Bienvenido 
              </li>
              <li className="it">Usuario</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroImage;
