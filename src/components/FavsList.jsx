import React, { useState, useEffect } from "react";
import axios from "axios";
//Estilos
import "../estilos/favsList.css";

const FavsList = () => {
  const [misFavoritos, setMisFavoritos] = useState([]);
  const [user, setUser] = useState({});

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
      .get(`/api/favoritos/${user.username}`)
      .then((res) => res.data)
      .then((favs) => {
        setMisFavoritos(favs);
      });
  }, [user.username]);

  return (
    <>
      <ul className="items-perfil">
        <div className="contenedor-favs-list">
          {misFavoritos.map(function (e, i) {
            return (
              <li key={i}>
                <img className="img-fav" src={e.imagen} alt="" />
              </li>
            );
          })}
        </div>
      </ul>
    </>
  );
};

export default FavsList;
