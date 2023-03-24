import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarDos from "../components/NavbarDos";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Pagination from "@mui/material/Pagination";
//Estilos
import "../estilos/propiedades.css";

const Venta = () => {
  const [propiedades, setPropiedades] = useState([]);
  const [page, setPage] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);

  const handleChange = (e, page) => {
    setPage(page);
    //window.scroll(0, 0);
  };

  //Favs click

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  useEffect(() => {
    axios
      .get(`/api/propiedades`)
      .then((res) => res.data)
      .then((propiedades) => {
        setPropiedades(propiedades);
      })
      .catch();
  }, [page]);

  //Filtrar clase de producto:
  let venta = [];
  for (let i = 0; i < propiedades.length; i++) {
    if (propiedades[i].disponibilidad === "Venta") {
      venta.push(propiedades[i]);
    }
  }
  ///////////////////////////////////////

  console.log("estas son los venta", venta);

  return (
    <>
      <NavbarDos />
      <ul>
        <div className="card-list">
          {venta.map(function (e, i) {
            return (
              <li key={i}>
                <div className="card-item">
                  <div className="p1" onClick={handleClick}>
                    {click ? (
                      <FavoriteIcon
                        sx={{ fontSize: 20 }}
                        style={{ color: "#ad6666" }}
                      />
                    ) : (
                      <FavoriteBorderIcon
                        sx={{ fontSize: 20 }}
                        style={{ color: "#222" }}
                      />
                    )}
                  </div>

                  <div className="card-bot">
                    <div className="direccion">
                      {e.ubicacion},{e.direccion}
                    </div>
                    <button className="btn-mas">Ver más</button>
                  </div>
                  <img className="img-prop" src={e.imagen} alt="" />
                </div>
              </li>
            );
          })}
        </div>
      </ul>
      <Pagination
        count={numberOfPages}
        siblingCount={0}
        boundaryCount={2}
        defaultPage={0}
        page={page}
        sx={{ button: { color: "#4d4a4a" } }}
        color="primary"
        onChange={handleChange}
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "2em",
        }}
      />
    </>
  );
};

export default Venta;
