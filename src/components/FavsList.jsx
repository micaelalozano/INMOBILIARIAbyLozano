import React, { useState, useEffect } from "react";
import axios from "axios";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
//Estilos
import "../estilos/favsList.css";

const FavsList = () => {
  const [misFavoritos, setMisFavoritos] = useState([]);
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

  console.log(log);

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
                    <button className="unheart">
                      <HeartBrokenIcon
                        sx={{ fontSize: 30 }}
                        style={{ color: "#ff69b4" }}
                      />
                    </button>
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
