import React, { useState } from "react";
import { Link } from "react-router-dom";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
//Estilos
import "../estilos/adminNavbar.css";

const AdminNavbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <div className="ver-contenedor">
        <ul onClick={handleClick}>
          <li className="li-more">
            Ver mas
            <ExpandCircleDownOutlinedIcon
              className="icon-see-more"
              sx={{ fontSize: 17 }}
            />
            <ul className={click ? "span" : "same"}>
              <Link to="/panel_administrador=editar">
                <li>Editar y Eliminar propiedades</li>{" "}
              </Link>

              <Link to="/panel_administrador=crear">
                <li>Crear propiedades</li>
              </Link>
              
              <Link to="/panel_administrador=ver-usuarios">
                <li>Ver usuarios</li>
              </Link>

              <Link to="/panel_administrador=ver-visitas">
                <li>Ver reservas</li>
              </Link>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AdminNavbar;
