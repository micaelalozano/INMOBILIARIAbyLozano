import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import axios from "axios";
//Estilos
import "../estilos/login.css";

const CambiarPerfil = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [imagen, setImagen] = useState("");

  console.log("id aqui", id);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`/api/users/${id}`, { imagen }, { withCredentials: true })
      .then((res) => res.data)
      .then((data) => {
        navigate("/mis_favoritos");
      })
      .catch((err) => {
        window.alert("ERROR");
      });
  };

  return (
    <>
      {" "}
      <form className="body-login" onSubmit={handleSubmit}>
        <p className="iniciar-sesion">CAMBIAR FOTO DE PERFIL</p>
        <div className="form">
          <input
            type="text"
            required
            onChange={(e) => setImagen(e.target.value)}
            value={imagen}
          />
          <label className="lbl-nombre">
            <span className="text-nomb">URL imagen</span>
          </label>
        </div>

        <button className="boton-sesion-dos" onClick={handleSubmit}>
          ACEPTAR
        </button>
      </form>
    </>
  );
};

export default CambiarPerfil;
