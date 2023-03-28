import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
//Estilos
import "../estilos/favsList.css";

const FavsList = () => {
  const [misFavoritos, setMisFavoritos] = useState([]);
  const [deleteFavs, setDeleteFavs] = useState([]);
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

  useEffect(() => {
    axios
      .get(`/api/users/${user.username}`)
      .then((res) => res.data)
      .then((user) => {
        setLog(user);
      });
  }, [user.username]);

  useEffect(() => {
    axios
      .get(`/api/favoritos/${user.username}`)
      .then((res) => res.data)
      .then((favs) => {
        setMisFavoritos(favs);
      });
  }, [user.username]);

  console.log("favs aqui", misFavoritos);

  //Eliminar de favoritos

  const favDelete = (id) => {
    axios
      .delete(`/api/favoritos/remove`, {
        propiedadId: 10,
        userId: log[0].id,
      })
      .then((res) => res.data)
      .then((data) => {
        console.log("data here",data);
        setDeleteFavs(data);
      });
  };

  return (
    <>
      <ul className="items-perfil">
        <div className="contenedor-favs-list">
          {misFavoritos.map(function (e, i) {
            return (
              <li key={i}>
                <div className="fav-lis-contenedor">
                  <div className="favs-datos">
                    <div className="favs-dos">
                      <img className="mini-icon" src={log[0].imagen} alt="" />
                      <p className="name-style"> {log[0].name} </p>
                    </div>
                    <button className="unheart" onClick={() => favDelete(e.id)}>
                      <span
                        className="tooltip-remove"
                        mensaje="Eliminar de favoritos"
                      >
                        <HeartBrokenIcon
                          sx={{ fontSize: 28 }}
                          style={{ color: "#ff69b4" }}
                        />
                      </span>
                    </button>
                  </div>
                  <div className="fav-ver-mas">
                    <Link to={"/propiedades=ver-mas/" + e.id}>
                      <button className="btn-mas">Ver más</button>
                    </Link>
                  </div>
                  <img className="img-fav" src={e.imagen} alt="" />
                </div>
              </li>
            );
          })}
        </div>
      </ul>
    </>
  );
};

export default FavsList;
