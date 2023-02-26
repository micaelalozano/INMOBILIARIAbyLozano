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
                <strong>Bienvenido</strong>{" "}
              </li>
              <li className="it">usuario</li>
            </ul>
          </div>
        </div>
        <div className="aca"><img src="https://media.admagazine.com/photos/61e5acc706c10ae95c71b902/16:9/w_2560%2Cc_limit/New-York-skyline.jpg" alt="" /></div>
      </div>
    </>
  );
};

export default HeroImage;
