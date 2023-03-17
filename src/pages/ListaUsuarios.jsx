import React, { useState, useEffect } from "react";
import { Spinner } from "../components/Spinner";
import axios from "axios";
import NavbarDos from "../components/NavbarDos";
import AdminNavbar from "../components/AdminNavbar";
//Estilos
import "../estilos/userList.css";

const ListaUsuarios = () => {
  const [user, setUser] = useState({});
  const [listaUsuarios, setListaUsuarios] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
                    <img className="div-list-user-img" src={e.imagen} alt="" />
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
                        <button className="btn-delete-user">
                          <span className="icon-delete-user">delete</span>
                        </button>
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
