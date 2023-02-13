const express = require("express");
const app = express();
const db = require("./db");
const models = require("./models");
const router = require("./routes");
const cors = require("cors");
const cookieParser = require("cookie-parser"); //Para poder hacer el login con Auth

app.use(express.static("src"));

//Middleware

app.use(cors());
app.use(express.json());
app.use(cookieParser()); //Para poder hacer el login con Auth

app.use("/api", router);

db.sync({ force: false }).then(() => {
  console.log("Db Connected");
  app.listen(3001, () => console.log("Servidor escuchando en el puerto 3001"));
});