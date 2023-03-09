import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NavbarDos from "../components/NavbarDos";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import MailIcon from "@mui/icons-material/Mail";
//Estilos
import "../estilos/favoritos.css";

const Favoritos = () => {
  const [user, setUser] = useState({});
  const [log, setLog] = useState([]);

  useEffect(() => {
    axios
      .get("/api/users/ruta/perfil")
      .then((res) => res.data)
      .then((user) => {
        setUser(user);
      });
  }, []);

  //User actual data ID

  useEffect(() => {
    axios
      .get(`/api/users/${user.username}`)
      .then((res) => res.data)
      .then((user) => {
        setLog(user);
      });
  }, [user.username]);

  console.log("usr data", log);

  return (
    <>
      {user.username ? (
        <>
          <NavbarDos />
          <div className="perfil-portada">
            {log.map(function (e, i) {
              return (
                <>
                  <img className="portada-img" src={e.imagen} alt="" />
                  <div className="div-perfil-img">
                    <img className="perfil-img" src={e.imagen} alt="" />
                    <p className="username"> {e.username} </p>
                  </div>
                </>
              );
            })}
          </div>
          <div className="info-user">
            <p className="names">
              <AccountCircleIcon
                className="cuenta-logo"
                sx={{ fontSize: 20 }}
              />
              {user.name} {user.lastname}{" "}
            </p>
            {log.map(function (e, i) {
              return (
                <ul className="items-perfil">
                  <Link to={"/cambiar-foto-de-perfil/" + e.id}>
                    <li>
                      <span
                        className="tooltip-perfil"
                        mensaje="Cambiar foto de perfil"
                      >
                        <AddCircleIcon
                          className="icons-color"
                          sx={{ fontSize: 21 }}
                        />
                      </span>
                    </li>
                  </Link>
                  <li>
                    <span className="tooltip-perfil" mensaje={user.email}>
                      <MailIcon className="icons-color" sx={{ fontSize: 21 }} />
                    </span>
                  </li>
                  <li>
                    <span className="tooltip-perfil" mensaje="0 favoritos">
                      <FavoriteIcon
                        className="icons-color"
                        sx={{ fontSize: 21 }}
                      />
                    </span>
                  </li>
                </ul>
              );
            })}
          </div>
        </>
      ) : (
        <>
          <p>log in</p>
        </>
      )}
    </>
  );
};

export default Favoritos;
