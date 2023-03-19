import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Spinner } from "../components/Spinner";
import { Link } from "react-router-dom";
import axios from "axios";
import NavbarDos from "../components/NavbarDos";
import AdminNavbar from "../components/AdminNavbar";
//Estilos
import "../estilos/userList.css";

const ListaUsuarios = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [listaUsuarios, setListaUsuarios] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [deleteUsuarios, setDeleteUsuarios] = useState([]);

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
      .get("/api/users")
      .then((res) => res.data)
      .then((listaUsuarios) => {
        setListaUsuarios(listaUsuarios);
        setIsLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`/api/users/${id}`)
      .then((res) => res.data)
      .then((user) => {
        setDeleteUsuarios(user);
        setIsLoading(false);
        navigate("/panel_administrador=ver-usuarios");
      });
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {user.username ? (
        <>
          <NavbarDos />
          <AdminNavbar />
          <div className="user-list-div">
            <div className="cont-user-list">
              <p className="header-p">
                {" "}
                <span className="icon-user">group</span>
                Lista de usuarios registrados
              </p>
            </div>
            {listaUsuarios.map(function (e, i) {
              return (
                <div className="lista-de-usuarios">
                  <div className="div-list-user">
                    <img
                      className="div-list-user-img"
                      src={
                        e.imagen
                          ? e.imagen
                          : "https://i.pinimg.com/170x/5f/03/10/5f0310152c8429dfbc441e99d5a8e33e.jpg"
                      }
                      alt=""
                    />
                  </div>
                  <div className="name-div">
                    <p className="name-div-p">
                      {e.name}{" "}
                      {e.lastname[0].toUpperCase() + e.lastname.substring(1)}
                    </p>
                  </div>
                  {e.username === "soymicaela" ? (
                    <div className="delete-div">
                      <span
                        className="tooltip-userlist"
                        mensaje="Usuario administrador"
                      >
                        <button className="btn-delete-user">
                          <span className="icon-manage-user">
                            manage_accounts
                          </span>
                        </button>
                      </span>
                    </div>
                  ) : (
                    <div className="delete-div">
                      <span
                        className="tooltip-userlist"
                        mensaje="Eliminar usuario"
                      >
                        <Link to="/">
                          <button
                            className="btn-delete-user"
                            onClick={() => handleDelete(e.id)}
                          >
                            <span className="icon-delete-user">delete</span>
                          </button>
                        </Link>
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <>
          {" "}
          <p>log in</p>
        </>
      )}
    </>
  );
};

export default ListaUsuarios;
