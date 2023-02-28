import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Login from "./pages/Login";
import Register from "./pages/Register";

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
        </Routes>
      </>
    );
  };
  
  export default App;