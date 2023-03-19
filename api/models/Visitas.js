const Sequelize = require("sequelize");
const db = require("../db");

class Visitas extends Sequelize.Model {}

Visitas.init(
  {
    propiedad: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    nombre: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    apellido: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.DataTypes.STRING, 
      allowNull: false,
    },
    fecha: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    horario: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "visitas" }
);

module.exports = Visitas;
