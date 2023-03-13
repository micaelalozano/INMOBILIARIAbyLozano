import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NavbarDos from "../components/NavbarDos";
import AdminNavbar from "../components/AdminNavbar";
//Estilos
import "../estilos/editar.css";

const EditarProp = () => {
  const [propiedades, setPropiedades] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/propiedades?page=${0}`)
      .then((res) => res.data)
      .then((propiedades) => {
        setPropiedades(propiedades.content);
      })
      .catch();
  }, []);

  return (
    <>
      <NavbarDos />
      <AdminNavbar />
      <ul>
        <div className="e-contenedor">
          {propiedades.map(function (e, i) {
            return (
              <li key={i}>
                <div className="edit-contenedor">
                  <div className="btn-contenedor">
                    <span
                      className="tooltip-admin"
                      mensaje="Editar propiedades"
                    >
                      <Link to={"/editar-propiedad/" + e.id}>
                        <button className="btn-edit-delete">
                          <span className="icon-edit">edit</span>
                        </button>{" "}
                      </Link>
                    </span>

                    <span
                      className="tooltip-admin-dos"
                      mensaje="Eliminar propiedades"
                    >
                      <button className="btn-edit-delete-2">
                        <span className="icon-delete">delete</span>
                      </button>
                    </span>
                  </div>
                  <img className="e-img" src={e.imagen} alt="" />
                </div>
              </li>
            );
          })}
        </div>
      </ul>
    </>
  );
};

export default EditarProp;
