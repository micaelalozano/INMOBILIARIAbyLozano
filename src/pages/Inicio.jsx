import React from "react";
import HeroImage from "../components/HeroImage";
import Navbar from "../components/Navbar";
//Estilos
import "../estilos/inicio.css";

const Inicio = () => {
  return (
    <>
      <Navbar />
      <HeroImage />
      <h2 className="h2">
        <span className="span">Barrios</span>
      </h2>
      <div className="card-container">
        <div className="card">
          <img
            className="card-poster"
            src="https://static.mirandabosch.com/mb/barrios/recoleta/recoleta-portada.jpg"
            alt="Poster"
          />
        </div>
        <div className="card-dos">
          <img
            className="card-poster"
            src="https://static.mirandabosch.com/mb/barrios/madero/madero-portada.jpg"
            alt="Poster"
          />
        </div>
        <div className="card-tres">
          <img
            className="card-poster"
            src="https://funnytimestravel.com/wp-content/uploads/2019/12/bairro-palermo-em-buenos-aires.jpg"
            alt="Poster"
          />
        </div>
      </div>
    </>
  );
};

export default Inicio;
