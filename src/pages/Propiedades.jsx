import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { Spinner } from "../components/Spinner";
import NavbarDos from "../components/NavbarDos";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
//Estilos
import "../estilos/propiedades.css";

const Propiedades = () => {
  const navigate = useNavigate();
  const [propiedades, setPropiedades] = useState([]);
  const [isFavorito, setIsFavorito] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [log, setLog] = useState({});
  const [user, setUser] = useState([]);
  const [misFavoritos, setMisFavoritos] = useState([]);
  const [deleteFavs, setDeleteFavs] = useState([]);

  useEffect(() => {
    axios
      .get("/api/users/ruta/perfil")
      .then((res) => res.data)
      .then((user) => {
        setLog(user);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`/api/users/${log.username}`)
      .then((res) => res.data)
      .then((user) => {
        setUser(user);
      });
  }, [log.username]);

  useEffect(() => {
    axios
      .get(`/api/propiedades`)
      .then((res) => res.data)
      .then((propiedades) => {
        setPropiedades(propiedades);
        setIsLoading(false);
      })
      .catch();
  }, []);

  //Agregar a favoritos:
  const addFav = (propId) => {
    if (!log.username) {
      window.alert("Necesitas loguearte");
      return;
    }
    axios
      .post("/api/favoritos", {
        propiedadId: propId,
        userId: user[0].id,
      })
      .then(() => {
        navigate("/propiedades=ver_todo");
        //window.alert("favs exito");
        return axios.get(`/api/favoritos/${log.username}`);
      })
      .then((res) => res.data)
      .then((data) => setIsFavorito(data))
      .catch(() => alert("Se ha producido un error"));
  };

  //Mi lista de favoritos
  useEffect(() => {
    axios
      .get(`/api/favoritos/${log.username}`)
      .then((res) => res.data)
      .then((favs) => {
        setMisFavoritos(favs);
      });
  }, [log.username]);

  //Eliminar de favoritos
  const favDelete = (propId) => {
    axios
      .delete(`/api/favoritos/${propId}/${user[0].id}`, )
      .then((res) => res.data)
      .then((data) => {
        setDeleteFavs(data);
        navigate("/propiedades=ver_todo");
      });
  };

  if (isLoading) {
    return <Spinner />;
  }

  console.log("esis sn mis favs!!", misFavoritos);
  console.log("estas son las", propiedades);

  return (
    <>
      <NavbarDos />
      <ul>
        <div className="card-list">
          {propiedades.map(function (e, i) {
            return (
              <li key={i}>
                <div className="card-item">
                  <p className="p1">
                    <span
                      className="tooltip-mis-favs"
                      mensaje="Agregar a favoritos"
                    >
                      {misFavoritos.some((data) => data.id === e.id) ? (
                        <Link to="/">
                          <FavoriteIcon
                            sx={{ fontSize: 20 }}
                            style={{ color: "#ff69b4" }}
                            onClick={() => favDelete(e.id)}
                          />
                        </Link>
                      ) : (
                        <Link to="/">
                          <FavoriteBorderIcon
                            sx={{ fontSize: 20 }}
                            style={{ color: "#ff69b4" }}
                            onClick={() => addFav(e.id)}
                          />
                        </Link>
                      )}
                    </span>
                  </p>

                  <div className="card-bot">
                    <div className="direccion">
                      {e.ubicacion},{e.direccion}
                    </div>
                    <Link to={"/propiedades=ver-mas/" + e.id}>
                      <button className="btn-mas">Ver más</button>
                    </Link>
                  </div>
                  <img className="img-prop" src={e.imagen} alt="" />
                </div>
              </li>
            );
          })}
        </div>
      </ul>
    </>
  );
};

export default Propiedades;
