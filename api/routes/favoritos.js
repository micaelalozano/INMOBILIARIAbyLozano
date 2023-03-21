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
  router.get("/:userId", (req, res) => {
    Propiedades.findAll({
      include: { model: Users, where: { id: req.params.userId } },
    }).then((data) => {
      res.status(200).send(data);
    });
  });
  
  //Eliminar favs:
  router.delete("/:id", (req, res) => {
    Propiedades.findOne({
      where: { propiedadId: req.body.propiedadId, userId: req.body.id },
    }).then((data) => {
      if (data === null) {
        Propiedades.destroy({
          where: {
            userId: req.body.id,
            propiedadId: req.body.propiedadId,
          },
        })
          .then((data) => {
            res.status(201).send("Eliminado");
          })
          .catch((err) => {
            res.status(400).send(err);
          });
      } else {
        res.status(400).send("Error");
      }
    });
  });
  
  //Eliminar favs:
  router.delete("/delete/:id", (req, res) => {
    const { userId } = req.body;
  
    Propiedades.findOne({
      where: { id: req.params.id },
      include: { model: Users, where: { id: userId } },
    }).then((data) => {
      console.log(data);
      if (data) {
        Propiedades.destroy({
          where: {
            userId: userId,
            propiedadId: req.params.id,
          },
        })
          .then((data) => {
            res.status(201).send("Eliminado");
          })
          .catch((err) => {
            res.status(400).send(err);
          });
      } else {
        res.status(400).send("Error");
      }
    });
  });
  
  module.exports = router;