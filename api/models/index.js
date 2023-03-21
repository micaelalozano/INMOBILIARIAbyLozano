const Propiedades = require("./Propiedades");
const Users = require("./Users");
const Visitas = require("./Visitas");

Users.belongsToMany(Propiedades,{through: "favorite_user"})
Propiedades.belongsToMany(Users,{through: "favorite_user"})

module.exports = { Users, Propiedades, Visitas };
