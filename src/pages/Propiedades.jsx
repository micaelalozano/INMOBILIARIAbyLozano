import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarDos from "../components/NavbarDos";
//Estilos
import "../estilos/propiedades.css";

const Propiedades = () => {
  const [propiedades, setPropiedades] = useState([]);

  useEffect(() => {
    axios
      .get("/api/propiedades?page=0")
      .then((res) => res.data)
      .then((propiedades) => {
        setPropiedades(propiedades.content);
      })
      .catch();
  }, []);

  console.log("estas son las", propiedades);

  return (
    <>
      <NavbarDos />
      <ul>
        <div className="card-list">
          {propiedades.map(function (e, i) {
            return (
              <li key={i}>
                <div class="card-item">
                  <p className="p1">fav</p>
                  <div class="card-content">
                    <p className="p2">mas</p>
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

export default Propiedades;
