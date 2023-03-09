import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
import NavbarDos from "../components/NavbarDos";
//Estilos
import "../estilos/detalles.css";

const Detalles = () => {
  const { prop_id } = useParams();
  const [propiedades, setPropiedades] = useState({});

  useEffect(() => {
    axios
      .get(`/api/propiedades/${prop_id}`)
      .then((res) => res.data)
      .then((data) => {
        setPropiedades(data);
      });
  }, [prop_id]);

  console.log(prop_id);

  return (
    <>
      <NavbarDos />
      <div className="detail-contenedor">
        <div className="left-detail">
          <p className="disponibilidad-detail">{propiedades.disponibilidad}</p>
          <img className="imagen-detail" src={propiedades.imagen} alt="" />
        </div>

        <div className="right-detail">
          <div className="precio-reserva-container">
            <p className="i-precio"> US${propiedades.precio} </p>
            <Link to={"/agendar_visita/" + propiedades.id}>
              <p className="i-reserva">Agendar visita</p>
            </Link>
          </div>
          <p className="i-detail">
            {propiedades.ubicacion},{propiedades.direccion}.
          </p>
          <p className="d-detail">{propiedades.descripcion}</p>
        </div>
      </div>
    </>
  );
};

export default Detalles;
