import React, { useState } from "react";
//import axios from "axios";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LoginIcon from "@mui/icons-material/Login";
//Estilos
import "../estilos/navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [clickDos, setClickDos] = useState(false);
  const handleClickDos = () => setClickDos(!clickDos);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 10) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <>
      <div className={color ? "header header-bg" : "header"}>
        <div className="hamburguer" onClick={handleClick}>
          {click ? (
            <FaTimes size={23} style={{ color: "#dc143c" }} />
          ) : (
            <FaBars size={23} style={{ color: "#dc143c" }} />
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
            <ul className={clickDos ? "children" : "sub-menu"}>
              <Link to="/">
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
          <Link to="/search">
            <FavoriteBorderIcon className="nav-icon" sx={{ fontSize: 20 }} />
          </Link>
          <Link to="/login">
            <LoginIcon className="nav-icon" sx={{ fontSize: 20 }} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
