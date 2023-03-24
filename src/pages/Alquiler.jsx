import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarDos from "../components/NavbarDos";
//import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
//Estilos
import "../estilos/propiedades.css";

const Alquiler = () => {
  const [propiedades, setPropiedades] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/propiedades`)
      .then((res) => res.data)
      .then((propiedades) => {
        setPropiedades(propiedades);
      })
      .catch();
  }, []);


  //Filtrar clase de producto:
  let alquiler = [];
  for (let i = 0; i < propiedades.length; i++) {
    if (propiedades[i].disponibilidad === "Alquiler") {
      alquiler.push(propiedades[i]);
    }
  }
  ///////////////////////////////////////

  console.log("estas son los alquiler", alquiler);

  return (
    <>
      <NavbarDos />
      <ul>
        <div className="card-list">
          {alquiler.map(function (e, i) {
            return (
              <li key={i}>
                <div className="card-item">
                  <p className="p1">
                    <FavoriteBorderIcon sx={{ fontSize: 20 }}/>
                  </p>
                  <div className="card-bot">
                    <div className="direccion">
                      {e.ubicacion},{e.direccion}
                    </div>
                    <button className="btn-mas">Ver más</button>
                  </div>
                  <img className="img-prop" src={e.imagen} alt="" />
                </div>
              </li>
            );
          })}
        </div>
      </ul>
    </>
  );
};

export default Alquiler;
