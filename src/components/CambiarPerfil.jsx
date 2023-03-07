import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
//Estilos
import "../estilos/login.css";

const CambiarPerfil = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [imagen, setImagen] = useState("");

  useEffect(() => {
    axios
      .get("/api/users/ruta/perfil")
      .then((res) => res.data)
      .then((user) => {
        setUser(user);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`/api/users/${user.username}`, { imagen }, { withCredentials: true })
      .then((res) => res.data)
      .then((data) => {
        navigate("/");
      })
      .catch((err) => {
        window.alert("ERROR");
      });
  };

  return (
    <>
      {" "}
      <form className="body-login" onSubmit={handleSubmit}>
        <p className="iniciar-sesion">INICIAR SESIÓN</p>
        <div className="form">
          <input
            type="text"
            required
            onChange={(e) => setImagen(e.target.value)}
            value={imagen}
          />
          <label className="lbl-nombre">
            <span className="text-nomb">imagen</span>
          </label>
        </div>

        <button className="boton-sesion" onClick={handleSubmit}>INICIAR</button>
      </form>
    </>
  );
};

export default CambiarPerfil;
