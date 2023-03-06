import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Propiedades from "./pages/Propiedades";
import Venta from "./pages/Venta";
import Alquiler from "./pages/Alquiler";

const App = () => {
    const [user, setUser] = useState({});
  
    useEffect(() => {
      axios
        .get("/api/users/ruta/me")
        .then((res) => res.data)
        .then((user) => {
          console.log(user);
          setUser(user);
        });
    }, []);
    console.log("acaa", user);
  
    return (
      <>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registrarme" element={<Register/>} />
          <Route path="/propiedades=ver_todo" element={<Propiedades/>} />
          <Route path="/propiedades=en_venta" element={<Venta/>} />
          <Route path="/propiedades=en_alquiler" element={<Alquiler/>} />
        </Routes>
      </>
    );
  };
  
  export default App;