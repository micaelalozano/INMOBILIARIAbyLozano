import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LoginIcon from "@mui/icons-material/Login";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
//Estilos
import "../estilos/navbar.css";
import "../estilos/navbarDos.css";

const NavbarDos = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [clickDos, setClickDos] = useState(false);
  const handleClickDos = () => setClickDos(!clickDos);

  useEffect(() => {
    axios
      .get("/api/users/ruta/perfil")
      .then((res) => res.data)
      .then((user) => {
        setUser(user);
      });
  }, []);

  const handleLogout = () => {
    axios
      .post("/api/users/logout")
      .then((res) => res.data)
      .then((user) => {
        setUser(user);
        navigate("/");
      });
  };

  return (
    <>
      <div className="header-navbar-dos">
        <div className="hamburguer" onClick={handleClick}>
          {click ? (
            <FaTimes size={23} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={23} style={{ color: "#ffffff" }} />
          )}
        </div>
        <div>
          <h3 className="titulo">ByLozano</h3>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <Link to="/">
            <li>Inicio</li>
          </Link>

          <li onClick={handleClickDos}>
            Propiedades <span className="material-icons">expand_more</span>
            <ul className={clickDos ? "children-navbar-dos" : "sub-menu"}>
              <Link to="/ver_todo=propiedades">
                <li className="sub-li">Ver todo</li>
              </Link>
              <Link to="/">
                <li className="sub-li">En venta</li>
              </Link>
              <Link to="/">
                <li className="sub-li">En alquiler</li>
              </Link>
            </ul>
          </li>
          <Link to="/">
            <li>Acerca de</li>
          </Link>
        </ul>

        <div className="nav-login">
          <>
            {user.username === "soymicaela" ? (
              <Link to="/administrador">
                <span className="tooltip" mensaje="Panel Administrador">
                  <AssignmentIndIcon
                    className="nav-icon"
                    sx={{ fontSize: 21 }}
                  />
                </span>
              </Link>
            ) : null}
          </>
          {user.username ? (
            <>
              <Link to="/search">
                <span className="tooltip" mensaje="Mis favoritos">
                  <FavoriteBorderIcon
                    className="nav-icon"
                    sx={{ fontSize: 20 }}
                  />
                </span>
              </Link>
              <Link to="/">
                <span className="tooltip-2" mensaje="Cerrar Sesión">
                  <div className="perfil-div-dos" onClick={handleLogout}>
                    <img
                      className="img-perfil"
                      src={user.imagen}
                      alt="perfil"
                    />
                  </div>
                </span>
              </Link>
            </>
          ) : (
            <>
              <Link to="/search">
                <span className="tooltip" mensaje="Mis favoritos">
                  <FavoriteBorderIcon
                    className="nav-icon"
                    sx={{ fontSize: 20 }}
                  />
                </span>
              </Link>
              <Link to="/login">
                <span className="tooltip" mensaje="Iniciar Sesión">
                  <LoginIcon className="nav-icon" sx={{ fontSize: 20 }} />
                </span>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default NavbarDos;