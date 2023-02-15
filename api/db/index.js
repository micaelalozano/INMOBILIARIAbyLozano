const Sequelize = require("sequelize");

const db = new Sequelize("joker", null, null, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

/* todavia no cree la db*/

module.exports = db;
