const express = require("express");
const router = express.Router();
const users = require("./users");
const propiedades = require("./propiedades");
const visitas = require("./visitas");

router.use("/users", users);
router.use("/propiedades", propiedades);
router.use("/visitas", visitas);

module.exports = router;
