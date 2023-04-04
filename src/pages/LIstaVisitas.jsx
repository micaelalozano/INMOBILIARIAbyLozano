import React, { useState, useEffect } from "react";
import axios from "axios";
import { Spinner } from "../components/Spinner";
import NavbarDos from "../components/NavbarDos";
import AdminNavbar from "../components/AdminNavbar";

const LIstaVisitas = () => {
  const [user, setUser] = useState({});
  const [listaVisitas, setListaVisitas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/api/users/ruta/perfil")
      .then((res) => res.data)
      .then((user) => {
        setUser(user);
      });
  }, []);

  useEffect(() => {
    axios
      .get("/api/visitas")
      .then((res) => res.data)
      .then((data) => {
        setListaVisitas(listaVisitas);
        setIsLoading(false);
      });
  }, [listaVisitas]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {user.username === "soymicaela" ? (
        <>
          <NavbarDos />
          <AdminNavbar />
        </>
      ) : (
        <>
          <p>log in</p>
        </>
      )}
    </>
  );
};

export default LIstaVisitas;
