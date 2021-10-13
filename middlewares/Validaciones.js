// Importamos el Schema de Role...
const Roles = require("../models/roles");
const User = require("../models/User");

//Consultamos a la BD para verificar si existe el rol...
const siExisteRol = async (role = "") => {
  // Se busca el rol en la base de datos...
  const roleEncontrado = await Roles.findOne({ role });

  if (!roleEncontrado) {
    throw new Error("El rol no existe");
  }
};

//También verificamos si existe el email...
const siExisteEmail = async (username = "") => {
  const emailEncontrado = await User.findOne({ username });

  if (emailEncontrado) {
    throw new Error("El Usuario ya existe");
  }
};

module.exports = {
  siExisteRol,
  siExisteEmail,
};
