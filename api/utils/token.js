//Para poder hacer el login con Auth
const jwt = require("jsonwebtoken");
const SECRET = "JOKER1";

const generateToken = (payload) => {
  const token = jwt.sign({ user: payload }, SECRET, { expiresIn: "2d" });
  return token;
};

const validateToken = (token) => {
  console.log(token);
  return jwt.verify(token, SECRET);
};

module.exports = { generateToken, validateToken };
