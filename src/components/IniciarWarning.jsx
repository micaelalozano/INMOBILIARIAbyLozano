import React from "react";
import { Link } from "react-router-dom";
//Estilos
import "../estilos/iniciarWarning.css";

const IniciarWarning = () => {
  return (
    <>
      <div className="warning">
        Necesitas iniciar sesión para ver tus favoritos
        <div className="opciones">
          <Link to="/login">
            <p className="opc-1">Iniciar Sesión</p>
          </Link>
          <Link to="/">
            <p className="opc-2">Volver a inicio</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default IniciarWarning;
