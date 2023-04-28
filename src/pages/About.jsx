import React from "react";
import NavbarDos from "../components/NavbarDos";
//import Footer from "../components/Footer";
//Estilos
import "../estilos/about.css";

const About = () => {
  return (
    <>
      <NavbarDos />
      <div className="about-contenedor">
        <p className="about-p">
          Siempre buscamos una oportunidad para difundir el arte contemporáneo
          argentino. Por eso en las vidrieras de todas nuestras sedes, están
          expuestas algunas de las obras de los artistas que representa Miranda
          Bosch Gallery.
          </p>

          <p className="about-p">
            Nuestra Boutique Quintana es un espacio preparado especialmente para
            que el broker pueda desarrollar su labor diaria con comodidad.
            Cuenta con recepción, despacho gerencial, 14 escritorios de trabajo
            y sala de reuniones. La sede de Palermo está ubicada sobre el
            Boulevard Cerviño, una zona exclusiva y con mucho movimiento. Tiene
            recepción, sala de reuniones y 6 escritorios de trabajo. Por último
            nuestra nueva sede en Puerto Madero, nuestra forma de ser testigos
            del crecimiento de esta nueva área de desarrollo y movimiento. Y
            también de integrarnos a la propuesta de lujo y modernidad que se va
            mostrando en esta parte de la Ciudad de Buenos Aires.
        </p>
      </div>
    </>
  );
};

export default About;
