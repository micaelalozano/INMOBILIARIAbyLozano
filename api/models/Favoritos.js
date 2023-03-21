const Sequelize = require("sequelize");
const db = require("../db");

class Favoritos extends Sequelize.Model {}

Favoritos.init(
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
        type: Sequelize.DataTypes.INTEGER, //biginit
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
    { sequelize: db, modelName: "favoritos" }
  );

module.exports = Favoritos;
