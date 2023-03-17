import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { Spinner } from "../components/Spinner";
import NavbarDos from "../components/NavbarDos";
import AdminNavbar from "../components/AdminNavbar";
//Estilos
import "../estilos/formEditarProp.css";

const FormEditarProps = () => {
  const { prop_id } = useParams();
  const navigate = useNavigate();
  const [propiedades, setPropiedades] = useState({});
  const [disponibilidad, setDisponibilidad] = useState("");
  const [direccion, setDireccion] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [imagen, setImagen] = useState("");
  const [isLoading, setIsLoading] = useState(true);

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
      .put(
        `/api/propiedades/${prop_id}`,
        { disponibilidad, direccion, descripcion, precio, ubicacion, imagen },
        { withCredentials: true }
      )
      .then((res) => res.data)
      .then((data) => {
        navigate("/panel_administrador=editar");
      })
      .catch((err) => {
        window.alert("ERROR");
      });
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <NavbarDos />
      <AdminNavbar />
      <div className="form-contendedor">
        <div className="prop-img">
          <img className="prop-img-content" src={propiedades.imagen} alt="" />
        </div>
        <form className="form-class" action="post" onSubmit={handleSubmit}>
          <label className="label-edit">Disponibilidad</label>
          <input
            required
            autoFocus
            id="input-edit"
            type="text"
            onChange={(e) => setDisponibilidad(e.target.value)}
            value={disponibilidad}
            placeholder={propiedades.disponibilidad}
          />

          <label className="label-edit">Ubicación</label>
          <input
            required
            id="input-edit"
            type="text"
            onChange={(e) => setUbicacion(e.target.value)}
            value={ubicacion}
            placeholder={propiedades.ubicacion}
          />

          <label className="label-edit">Dirección</label>
          <input
            required
            id="input-edit"
            type="text"
            onChange={(e) => setDireccion(e.target.value)}
            value={direccion}
            placeholder={propiedades.direccion}
          />

          <label className="label-edit">Precio</label>
          <input
            required
            id="input-edit"
            type="text"
            onChange={(e) => setPrecio(e.target.value)}
            value={precio}
            placeholder={propiedades.precio}
          />

          <label className="label-edit">Imagen</label>
          <input
            required
            id="input-edit"
            type="text"
            onChange={(e) => setImagen(e.target.value)}
            value={imagen}
            placeholder="Actual"
          />

          <label className="label-edit">Descripción</label>
          <textarea
            required
            id="input-edit"
            type="text"
            onChange={(e) => setDescripcion(e.target.value)}
            value={descripcion}
            placeholder={propiedades.descripcion}
          />
          <div className="btn-div">
            <button className="btn-form-edit">ACEPTAR</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormEditarProps;
