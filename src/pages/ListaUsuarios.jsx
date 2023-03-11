import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarDos from "../components/NavbarDos";
import AdminNavbar from "../components/AdminNavbar";

const ListaUsuarios = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get("/api/users/ruta/perfil")
      .then((res) => res.data)
      .then((user) => {
        setUser(user);
      });
  }, []);

  return (
    <>
      {user.username ? (
        <>
          <NavbarDos />
          <AdminNavbar />
          <p>tuki</p>
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

export default ListaUsuarios;
