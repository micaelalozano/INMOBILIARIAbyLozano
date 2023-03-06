import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarDos from "../components/NavbarDos";
//import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Pagination from "@mui/material/Pagination";
//Estilos
import "../estilos/propiedades.css";

const Alquiler = () => {
  const [propiedades, setPropiedades] = useState([]);
  const [page, setPage] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);

  const handleChange = (e, page) => {
    setPage(page);
    //window.scroll(0, 0);
  };

  useEffect(() => {
    axios
      .get(`/api/propiedades?page=${page}`)
      .then((res) => res.data)
      .then((propiedades) => {
        setPropiedades(propiedades.content);
        setNumberOfPages(propiedades.content?.total_pages);
      })
      .catch();
  }, [page]);


  //Filtrar clase de producto:
  let alquiler = [];
  for (let i = 0; i < propiedades.length; i++) {
    if (propiedades[i].disponibilidad === "Alquiler") {
      alquiler.push(propiedades[i]);
    }
  }
  ///////////////////////////////////////

  console.log("estas son los alquiler", alquiler);

  return (
    <>
      <NavbarDos />
      <ul>
        <div className="card-list">
          {alquiler.map(function (e, i) {
            return (
              <li key={i}>
                <div className="card-item">
                  <p className="p1">
                    <FavoriteBorderIcon sx={{ fontSize: 20 }}/>
                  </p>
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

export default Alquiler;
