import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Spinner } from "../components/Spinner";
import { useNavigate } from "react-router";
//import { Link } from "react-router-dom";
import NavbarDos from "../components/NavbarDos";
import Modal from "@mui/material/Modal";
//Estilos
import "../estilos/detalles.css";

const Detalles = () => {
  const { prop_id } = useParams();
  const navigate = useNavigate();
  const [propiedades, setPropiedades] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  //NodeMailer
  const [direccion, setDireccion] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [horario, setHorario] = useState("");

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [opens, setOpens] = useState(false);
  const handleOpens = () => setOpens(true);
  const handleCloses = () => setOpens(false);

  useEffect(() => {
    axios
      .get(`/api/propiedades/${prop_id}`)
      .then((res) => res.data)
      .then((data) => {
        setPropiedades(data);
        setIsLoading(false);
      });
  }, [prop_id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "/api/visitas",
        { direccion, nombre, apellido, email, fecha, horario },
        { withCredentials: true }
      )
      .then((res) => res.data)
      .then(() => {
        navigate("/confirmacion-de-reserva");
      });
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <NavbarDos />
      <div className="detail-contenedor">
        <div className="contenedor-left">
          <div className="disponibilidad-item">
            <p className="p-dispo">{propiedades.disponibilidad} </p>
          </div>
          <img
            className="img-left"
            src={propiedades.imagen}
            alt=""
            onClick={handleOpens}
          />
          <Modal
            open={opens}
            onClose={handleCloses}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <div className="modal-img-contenedor">
              <img className="img-modal" src={propiedades.imagen} alt="" />
            </div>
          </Modal>
        </div>
        <div className="contenedor-right">
          <h2 className="titulo-ubicacion">
            {propiedades.direccion}, {propiedades.ubicacion}
          </h2>
          <p className="p-descripcion"> {propiedades.descripcion} </p>
          <div className="precio-reserva-container">
            <button className="i-precio">$USD {propiedades.precio} </button>
            <button className="i-reserva" onClick={handleOpen}>
              Agendar visita
            </button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <div className="modal-contenedor">
                <form className="form-modal" onSubmit={handleSubmit}>
                  <label className="label-visita">Propiedad</label>
                  <select
                    type="file"
                    required
                    className="input-visita"
                    onChange={(e) => setDireccion(e.target.value)}
                    value={direccion}
                  >
                    <option></option>
                    <option>
                      {propiedades.direccion},{propiedades.ubicacion}
                    </option>
                  </select>
                  <label className="label-visita">Nombre</label>
                  <input
                    required
                    type="text"
                    className="input-visita"
                    onChange={(e) => setNombre(e.target.value)}
                    value={nombre}
                  />
                  <label className="label-visita">Apellido</label>
                  <input
                    required
                    type="text"
                    className="input-visita"
                    onChange={(e) => setApellido(e.target.value)}
                    value={apellido}
                  />
                  <label className="label-visita">E-mail</label>
                  <input
                    required
                    type="mail"
                    className="input-visita"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                  <label className="label-visita">Fecha</label>
                  <input
                    required
                    type="date"
                    min="2023-04-06"
                    max="2023-04-30"
                    className="input-visita"
                    onChange={(e) => setFecha(e.target.value)}
                    value={fecha}
                  />
                  <label className="label-visita">Horario</label>
                  <input
                    required
                    type="time"
                    min="12:00"
                    max="18:00"
                    className="input-visita"
                    onChange={(e) => setHorario(e.target.value)}
                    value={horario}
                  />
                  <div className="reserva-div">
                    <button className="reservar-btn">ACEPTAR</button>
                  </div>
                </form>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detalles;

/* {    <div className="detail-contenedor">
        <div className="left-detail">
          <p className="disponibilidad-detail">{propiedades.disponibilidad}</p>
          <img className="imagen-detail" src={propiedades.imagen} alt="" />
        </div>

        <div className="right-detail">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perferendis autem, doloremque alias culpa quod ad inventore cum modi
            neque, eaque ipsam magni iure beatae eos architecto non doloribus
            illo cumque.
          </p>
          <div className="precio-reserva-container">
            <p className="i-precio"> US${propiedades.precio} </p>
            <p className="i-reserva" onClick={handleOpen}>
              Agendar visita
            </p>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <h2>aqui</h2>
            </Modal>
          </div>
        </div>
      </div>}*/
