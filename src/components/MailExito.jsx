import React from "react";
import NavbarDos from "./NavbarDos";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
//Estilos
import "../estilos/mailExito.css";

const MailExito = () => {
  return (
    <>
      <NavbarDos />
      <div className="exito-contenedor">
        <CheckCircleIcon sx={{ fontSize: 50 }} style={{ color: "#32cd32" }} />
        <p className="exito-1">Reserva hecha con éxito!</p>
        <p className="exito-2">Revisa tu correo para ver la confirmación</p>
      </div>
    </>
  );
};

export default MailExito;
