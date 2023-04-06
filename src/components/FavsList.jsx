import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import FavoriteIcon from "@mui/icons-material/Favorite";
//Estilos
import "../estilos/favsList.css";

const FavsList = () => {
  const navigate = useNavigate();
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
  const favDelete = (propId) => {
    axios
      .delete(`/api/favoritos/${propId}/${log[0].id}`)
      .then((res) => res.data)
      .then((data) => {
        setDeleteFavs(data);
        navigate("/mis_favoritos");
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
                      <img
                        className="mini-icon"
                        src={
                          log[0].imagen
                            ? log[0].imagen
                            : "https://i.pinimg.com/170x/5f/03/10/5f0310152c8429dfbc441e99d5a8e33e.jpg"
                        }
                        alt=""
                      />
                      <p className="name-style"> {log[0].name} </p>
                    </div>
                    <button className="unheart">
                      <span
                        className="tooltip-remove"
                        mensaje="Eliminar de favoritos"
                      >
                        <Link to="/k">
                          <FavoriteIcon
                            sx={{ fontSize: 26 }}
                            style={{ color: "#ff69b4" }}
                            onClick={() => favDelete(e.id)}
                          />
                        </Link>
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
