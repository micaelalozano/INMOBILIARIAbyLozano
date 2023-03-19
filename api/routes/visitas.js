const express = require("express");
const nodemailer = require("nodemailer");
const { Visitas } = require("../models");
const router = express.Router();

//Crear reserva:
router.post("/", (req, res) => {
  const { propiedad, nombre, apellido, email, fecha, horario } = req.body;
  let testAccount = nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", //gmail
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "nodemailer.1995@gmail.com", //gmail crearme un nuevo gmail de prueba
      pass: "tpuzmufiahlpvike", // gmail
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  transporter.sendMail({
    from: "`INMOBILIARIA`",
    to: `${email}`,
    subject: "Confirmacion de cita",
    text: `Hola ${nombre} ${apellido} enviamos este mail para confirmar tu cita para el dia ${fecha} a las ${horario} en la direccion ${propiedad}.`,
  });

  Visitas.create({
    propiedad,
    nombre,
    apellido,
    email,
    fecha,
    horario,
  }).then((data) => {
    res.status(201).send(data);
  });
});

//Buscar todas las reservas:
router.get("/", (req, res) => {
  Visitas.findAll().then((data) => {
    res.status(200).send(data);
  });
});

module.exports = router;