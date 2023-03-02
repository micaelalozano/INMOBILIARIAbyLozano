import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
//Estilos
import "../estilos/login.css";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imagen, setImagen] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("api/users", {
        username: username,
        name: name,
        lastname: lastname,
        email: email,
        password: password,
        imagen: imagen,
      })
      .then((res) => res.data)
      .then(() => {
        navigate("/login");
      });
  };
  console.log("esto es", username, name, lastname, email, password, imagen);

  return (
    <>
      <form className="body-login" onSubmit={handleSubmit} type="form">
        <p className="registrar">REGISTRARME</p>
        <div className="form">
          <input
            type="text"
            required
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <label className="lbl-nombre">
            <span className="text-nomb">Nombre de Usuario*</span>
          </label>
        </div>

        <div className="form">
          <input
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <label className="lbl-nombre">
            <span className="text-nomb">Nombre*</span>
          </label>
        </div>

        <div className="form">
          <input
            type="text"
            required
            onChange={(e) => setLastname(e.target.value)}
            value={lastname}
          />
          <label className="lbl-nombre">
            <span className="text-nomb">Apellido*</span>
          </label>
        </div>

        <div className="form">
          <input
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label className="lbl-nombre">
            <span className="text-nomb">E-mail*</span>
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
            <span className="text-nomb">Contraseña*</span>
          </label>
        </div>

        <div className="form">
          <input
            type="text"
            required
            onChange={(e) => setImagen(e.target.value)}
            value={imagen}
          />
          <label className="lbl-nombre">
            <span className="text-nomb">Foto de Perfil*</span>
          </label>
        </div>
        <Link to="/login">
          <p className="click">Para iniciar sesión haz click aquí</p>
        </Link>
        <button className="boton-sesion">REGISTRAR</button>
      </form>
    </>
  );
};

export default Register;
