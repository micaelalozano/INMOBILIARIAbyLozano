const Sequelize = require("sequelize");
const db = require("../db");

class Propiedades extends Sequelize.Model {}

Propiedades.init(
  {
    disponibilidad: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    direccion: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: Sequelize.DataTypes.TEXT,
      allowNull: false,
    },
    precio: {
      type: Sequelize.DataTypes.INTEGER, 
      allowNull: false,
    },
    ubicacion: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    imagen: {
      type: Sequelize.DataTypes.TEXT,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "propiedades" }
);

module.exports = Propiedades;
