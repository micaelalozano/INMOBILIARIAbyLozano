const express = require("express");
const router = express.Router();
const users = require("./users");
const propiedades = require("./propiedades");

router.use("/users", users);
router.use("/propiedades", propiedades);

module.exports = router;