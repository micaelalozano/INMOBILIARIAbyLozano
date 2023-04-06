import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Spinner } from "../components/Spinner";
import { Link } from "react-router-dom";
import NavbarDos from "../components/NavbarDos";
import AdminNavbar from "../components/AdminNavbar";
//Estilos
import "../estilos/visitasList.css";

const LIstaVisitas = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [listaVisitas, setListaVisitas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [deleteVisita, setDeleteVisita] = useState([]);
  const [search, setSearch] = useState("");

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
      .get("/api/visitas")
      .then((res) => res.data)
      .then((listaVisitas) => {
        setListaVisitas(listaVisitas);
        setIsLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`/api/visitas/${id}`)
      .then((res) => res.data)
      .then((visita) => {
        setDeleteVisita(visita);
        setIsLoading(false);
        navigate("/panel_administrador=ver-visitas");
      });
  };

  //Funcion de busqueda:
  const searcher = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  //Metodo de filtrado:
  const result = !search
    ? listaVisitas
    : listaVisitas.filter((data) =>
        data.nombre.toLowerCase().includes(search.toLowerCase())
      );

  if (isLoading) {
    return <Spinner />;
  }

  console.log("lista aca0", listaVisitas);

  return (
    <>
      {user.username === "soymicaela" ? (
        <>
          <NavbarDos />
          <AdminNavbar />
          <div className="contendeor-visitas-list">
            <form id="search-form-user" target="_top">
              <input
                value={search}
                onChange={searcher}
                id="search-text-user"
                placeholder="Buscar por nombre de usuario"
                type="text"
              />
            </form>{" "}
            <ul>
              <div className="header-vi">
                <span className="icon-reserva">location_on</span>
                Lista de reservas para visitar propiedad
              </div>
              {result.map(function (e, i) {
                return (
                  <li key={i}>
                    <div className="lista-visitas">
                      <div className="reserva-nombre">
                        {e.nombre[0].toUpperCase() + e.nombre.substring(1)}{" "}
                        {e.apellido[0].toUpperCase() + e.apellido.substring(1)}
                      </div>

                      <div className="reserva-email">{e.email}</div>

                      <div className="reserva-direccion">{e.direccion}</div>

                      <div className="reserva-fecha">{e.fecha}</div>

                      <div className="reserva-horario">{e.horario}</div>

                      <div
                        className="reserva-eliminar"
                        onClick={() => handleDelete(e.id)}
                      >
                        <span
                          className="tooltip-userlist"
                          mensaje="Eliminar reserva"
                        >
                          <Link to="/.">
                            <button className="btn-delete-user">
                              <span className="icon-delete-user">delete</span>
                            </button>
                          </Link>
                        </span>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      ) : (
        <>
          <p>log in</p>
        </>
      )}
    </>
  );
};

export default LIstaVisitas;
