import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarDos from "../components/NavbarDos";

const Administrador = () => {
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
        </>
      ) : (
        <>
          <p>log in</p>
        </>
      )}
    </>
  );
};

export default Administrador;
