const express = require("express");
const { Favoritos, Users, Propiedades } = require("../models");
const router = express.Router();

router.post("/", (req, res) => {
  const { propiedadId, userId } = req.body;

  Propiedades.findOne({
    where: { id: propiedadId },
    include: { model: Users, where: { id: userId } },
  }).then((data) => {
    if (data === null) {
      Users.findByPk(userId).then((user) => {
        //console.log(user);
        Propiedades.findByPk(propiedadId).then((propiedad) => {
          user.addPropiedades(propiedad);
          res.status(201).send(propiedad);
        });
      });
    } else {
      res.send("listo");
    }
  });
});

//Buscar todos los favs:
router.get("/:username", (req, res) => {
  Propiedades.findAll({
    include: { model: Users, where: { username: req.params.username } },
  }).then((data) => {
    res.status(200).send(data);
  });
});

//Eliminar favs:
router.delete("/:id", (req, res) => {
  const { propiedadId, userId } = req.body;

  Propiedades.findOne({
    where: { id: propiedadId },
    include: { model: Users, where: { id: userId } },
  }).then((data) => {
    console.log(data);
    if (data) {
      {
        Users.findByPk(userId).then((user) => {
          //console.log(user);
          Propiedades.findByPk(propiedadId).then((propiedad) => {
            user.removePropiedades(propiedad);
            res.status(201).send(propiedad);
          });
        });
      }
    } else {
      res.status(400).send("Error");
    }
  });
});

module.exports = router;
