import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
//Estilos
import "../estilos/inicio.css";

const Footer = () => {
  return (
    <>
      <div className="footer-c">
        <div>
          <p className="by-ml">© Micaela Lozano {new Date().getFullYear()}</p>
        </div>
        <div className="iconos-c">
          <p className="mail">micaelalozano95@gmail.com</p>
          <LinkedInIcon sx={{ fontSize: 30 }} style={{ color: "#ff69b4" }} />
          <GitHubIcon sx={{ fontSize: 28 }} style={{ color: "#ff69b4" }} />
        </div>
      </div>
    </>
  );
};

export default Footer;
