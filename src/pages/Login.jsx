import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
//Estilos
import "../estilos/login.css";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "/api/users/login",
        { username, password },
        { withCredentials: true }
      )
      .then((res) => res.data)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        window.alert("El usuario es incorrecto o no esta registrado");
      });
  };

  return (
    <>
      <form className="body-login" onSubmit={handleSubmit}>
        <p className="iniciar-sesion">INICIAR SESIÓN</p>
        <div className="form">
          <input
            type="text"
            required
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <label className="lbl-nombre">
            <span className="text-nomb">Nombre de Usuario</span>
          </label>
        </div>

        <div className="form">
          <input
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <label className="lbl-nombre">
            <span className="text-nomb">Contraseña</span>
          </label>
        </div>
        <Link to="/registrarme">
          <p className="click">Si no estas registrado haz click aquí</p>
        </Link>
        <button className="boton-sesion">INICIAR</button>
      </form>
    </>
  );
};

export default Login;
