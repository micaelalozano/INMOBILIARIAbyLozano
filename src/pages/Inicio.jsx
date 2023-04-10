import React from "react";
import Footer from "../components/Footer";
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
        <span className="span-barrios">Barrios</span>
      </h2>
      <div className="card-container">
        <div className="card" mensaje="RECOLETA">
          <img
            className="card-poster"
            src="https://static.mirandabosch.com/mb/barrios/recoleta/recoleta-portada.jpg"
            alt="Barrio Imagen"
          />
        </div>
        <div className="card" mensaje="PUERTO MADERO">
          <img
            className="card-poster"
            src="https://static.mirandabosch.com/mb/barrios/madero/madero-portada.jpg"
            alt="Barrio Imagen"
          />
        </div>
        <div className="card" mensaje="PALERMO">
          <img
            className="card-poster"
            src="https://www.kayak.com.ar/rimg/dimg/49/fd/e21e6533-hood-215141-166c11589b4.jpg?width=1366&height=768&xhint=2221&yhint=2053&crop=true"
            alt="Barrio Imagen"
          />
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Inicio;
