const express = require("express");
const { Propiedades } = require("../models");
const router = express.Router();

//Crear propiedad:
router.post("/", (req, res) => {
  const { disponibilidad, direccion, descripcion, precio, ubicacion, imagen } =
    req.body;
  Propiedades.create({
    disponibilidad,
    direccion,
    descripcion,
    precio,
    ubicacion,
    imagen,
  })
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((error) => {
      console.log(error);
    });
});

//Buscar todas las propiedades:
router.get("/", (req, res) => {
  Propiedades.findAll().then((data) => {
    res.status(200).send(data);
  });
});

//Buscar las propiedades por ID:
router.get("/:id", (req, res) => {
  const { id } = req.params;

  Propiedades.findByPk(id)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((error) => {
      console.log(error);
    });
});

//Buscar las propiedades por query:
router.get("/search?q=/:q", (req, res) => {
  const { q } = req.query;
  Propiedades.findAll({
    where: {
      q,
    },
  }).then((data) => {
    res.status(200).send(data);
  });
});

//Actualizar propiedades:
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { disponibilidad, direccion, descripcion, precio, ubicacion, imagen } =
    req.body;

  Propiedades.update(
    { disponibilidad, direccion, descripcion, precio, ubicacion, imagen },
    { where: { id } }
  )
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((error) => {
      console.log(error);
    });
});

//Eliminar propiedades:
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Propiedades.destroy({ where: { id } })
    .then((data) => {
      res.send("Eliminado");
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
