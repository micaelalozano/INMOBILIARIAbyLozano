import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Propiedades from "./pages/Propiedades";
import Venta from "./pages/Venta";
import Alquiler from "./pages/Alquiler";
import Favoritos from "./pages/Favoritos";
import CambiarPerfil from "./components/CambiarPerfil";
import Administrador from "./pages/Administrador";
import Detalles from "./pages/Detalles";
import Visitas from "./pages/Visitas";

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
          <Route path="/mis_favoritos" element={<Favoritos/>} />
          <Route path="/cambiar-foto-de-perfil/:id" element={<CambiarPerfil/>} />
          <Route path="/panel_administrador" element={<Administrador/>} />
          <Route path="/propiedades=ver_todo" element={<Propiedades/>} />
          <Route path="/propiedades=en_venta" element={<Venta/>} />
          <Route path="/propiedades=en_alquiler" element={<Alquiler/>} />
          <Route path="/propiedades=ver-mas/:prop_id" element={<Detalles/>} />
          <Route path="/agendar_visita/:prop_id" element={<Visitas/>} />
        </Routes>
      </>
    );
  };
  
  export default App;