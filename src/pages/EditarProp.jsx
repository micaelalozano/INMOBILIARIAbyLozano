import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import axios from "axios";
import NavbarDos from "../components/NavbarDos";
import AdminNavbar from "../components/AdminNavbar";
//Estilos
import "../estilos/editar.css";

const EditarProp = () => {
  const navigate = useNavigate();
  const [propiedades, setPropiedades] = useState([]);
  const [deletePropiedades, setDeletePropiedades] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/propiedades?page=${0}`)
      .then((res) => res.data)
      .then((propiedades) => {
        setPropiedades(propiedades.content);
      })
      .catch();
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`/api/propiedades/${id}`)
      .then((res) => res.data)
      .then((propiedad) => {
        setDeletePropiedades(propiedad);
        navigate("/panel_administrador=editar");
      });
  };

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
                      <Link to="/">
                        <button
                          className="btn-edit-delete-2"
                          onClick={() => handleDelete(e.id)}
                        >
                          <span className="icon-delete">delete</span>
                        </button>
                      </Link>
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
