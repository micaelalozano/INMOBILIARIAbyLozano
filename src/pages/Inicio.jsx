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
        <div className="card-dos-t">
          <img
            className="card-poster"
            src="https://static.mirandabosch.com/mb/barrios/palermo/palermo-portada.jpg"
            alt="Poster"
          />
        </div>
        <div className="card">
          <img
            className="card-poster"
            src="https://static.mirandabosch.com/mb/barrios/libertador/libertador-portada.jpg"
            alt="Poster"
          />
        </div>
      </div>
    </>
  );
};

export default Inicio;
