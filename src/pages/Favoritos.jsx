import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Spinner } from "../components/Spinner";
import NavbarDos from "../components/NavbarDos";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import MailIcon from "@mui/icons-material/Mail";
import FavsList from "../components/FavsList";
//Estilos
import "../estilos/favoritos.css";

const Favoritos = () => {
  const [user, setUser] = useState({});
  const [log, setLog] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
        setIsLoading(false);
      });
  }, [user.username]);

  console.log("usr data", log);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {user.username ? (
        <>
          <NavbarDos />
          <div className="perfil-portada">
            {log.map(function (e, i) {
              return (
                <>
                  <img
                    className="portada-img"
                    src={
                      e.imagen
                        ? e.imagen
                        : "https://i.pinimg.com/170x/5f/03/10/5f0310152c8429dfbc441e99d5a8e33e.jpg"
                    }
                    alt="pic"
                  />
                  <div className="div-perfil-img">
                    <img
                      className="perfil-img"
                      src={
                        e.imagen
                          ? e.imagen
                          : "https://i.pinimg.com/170x/5f/03/10/5f0310152c8429dfbc441e99d5a8e33e.jpg"
                      }
                      alt="pic"
                    />

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
              {user.name}{" "}
              {user.lastname[0].toUpperCase() + user.lastname.substring(1)}
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
                    <span className="tooltip-perfil" mensaje="3 favoritos">
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
          <FavsList />
        </>
      ) : (
        <>
          <p>Necesitas iniciar sesion</p>
        </>
      )}
    </>
  );
};

export default Favoritos;
