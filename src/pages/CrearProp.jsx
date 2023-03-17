import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Spinner } from "../components/Spinner";
import axios from "axios";
import NavbarDos from "../components/NavbarDos";
import AdminNavbar from "../components/AdminNavbar";
import AddHomeOutlinedIcon from "@mui/icons-material/AddHomeOutlined";
//Estilos
import "../estilos/crearProp.css";

const CrearProp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [disponibilidad, setDisponibilidad] = useState("");
  const [direccion, setDireccion] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [imagen, setImagen] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/api/users/ruta/perfil")
      .then((res) => res.data)
      .then((user) => {
        setUser(user);
        setIsLoading(false);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("api/propiedades", {
        disponibilidad: disponibilidad,
        ubicacion: ubicacion,
        direccion: direccion,
        precio: precio,
        imagen: imagen,
        descripcion: descripcion,
      })
      .then((res) => res.data)
      .then(() => {
        window.alert("Propiedad creada");
        navigate("/panel_administrador=editar");
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
          <div className="create-contenedor">
            <div className="create-div">
              <p className="new-prop">
                <AddHomeOutlinedIcon
                  sx={{ fontSize: 18 }}
                  className="add-prop-icon"
                />
                Crear nueva propiedad
              </p>
            </div>
            <form
              className="form-class-create"
              action="post"
              onSubmit={handleSubmit}
            >
              <label className="label-create">Disponibilidad</label>
              <input
                autoFocus
                required
                id="input-edit"
                type="text"
                onChange={(e) => setDisponibilidad(e.target.value)}
                value={disponibilidad}
              />

              <label className="label-create">Ubicación</label>
              <input
                required
                id="input-edit"
                type="text"
                onChange={(e) => setUbicacion(e.target.value)}
                value={ubicacion}
              />

              <label className="label-create">Dirección</label>
              <input
                required
                id="input-edit"
                type="text"
                onChange={(e) => setDireccion(e.target.value)}
                value={direccion}
              />

              <label className="label-create">Precio</label>
              <input
                required
                id="input-edit"
                type="text"
                onChange={(e) => setPrecio(e.target.value)}
                value={precio}
              />

              <label className="label-create">Imagen</label>
              <input
                required
                id="input-edit"
                onChange={(e) => setImagen(e.target.value)}
                value={imagen}
              />

              <label className="label-create">Descripción</label>
              <textarea
                required
                id="input-edit"
                type="text"
                onChange={(e) => setDescripcion(e.target.value)}
                value={descripcion}
              />
              <div className="btn-div-create">
                <button className="btn-form-edit">ACEPTAR</button>
              </div>
            </form>
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

export default CrearProp;
