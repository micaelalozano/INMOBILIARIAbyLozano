import React from "react";
import { Link } from "react-router-dom";
//Estilos
import "../estilos/login.css";

const Login = () => {
  return (
    <>
      <body className="body-login">
        <p className="iniciar-sesion">INICIAR SESIÓN</p>
        <form className="form">
          <input type="text" required />
          <label className="lbl-nombre">
            <span className="text-nomb">Nombre de Usuario</span>
          </label>
        </form>

        <form className="form">
          <input type="password" required />
          <label className="lbl-nombre">
            <span className="text-nomb">Contraseña</span>
          </label>
        </form>
        <Link to="/registrarme">
          <p className="click">Si no estas registrado haz click aquí</p>
        </Link>
        <button className="boton-sesion">INICIAR</button>
      </body>
    </>
  );
};

export default Login;
