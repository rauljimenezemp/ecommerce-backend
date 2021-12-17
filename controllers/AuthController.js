const { AuthModel } = require('../models')

const register = async (req, res) => {
  //Estructurar email y password.
  const { email, password } = req.body;
  //si no existen, retornar y responder con mensaje de error.
  if (!email || !password) { return res.status(400).send({ menssage: 'Ingresa email y password'});
  }

  try {
    //Buscar email en base de datos para validar que existe
    const emailExists = await AuthModel.findOne({ email });
    //Si ya existe retornar y respondert con mensajer de error
    if (emailExists) {
      return res.status(400).send({ message: 'Ya existe un usuario con ese correo'});
    }
    //Ya validado el email crear usuario y responder
    const body = { email, password }
    const newUser = await AuthModel.create(body)
    return res.status(201).send({ message: 'Usuario creado!', newUser });
  } catch (err) {
    return res.status(400).send({ message: 'Error creando usuario!', error: err.message });
  }
};

const login = async (req, res) => {
  //Desestructurar email y password
  const { email, password } = req.body;
  //si no existen, retornar y responder con mensaje de error.
  if (!email || !password) {
    return res.status(400).send({ menssage: 'Ingresa email y password'});
  }

  try {
    //Buscar email en base de datos para validar que existe
    const user = await AuthModel.findOne({ email });
    //Si ya existe retornar y respondert con mensajer de error
    if (!user) {
      return res.status(400).send({ message: 'No existe un usuario con ese correo'});
    }
  //Ya validado el email comparar contarseñas
    const validPassword = await user.comparePassword(password);
    //Si no son iguales, retornar y responder con mensage de error.
    if (!validPassword) {
      return res.status(400).send({ message: 'Passwords no coinciden'});
    }

    //Ya validado el password, crear token de autenticación.
    //agregar token a petición y responder.

    return res.send({ message: 'Hola desde login!'});
  } catch (err) {
    return res.status(400).send({ message: 'Error al hacer login!', error: err.message });
  }
};

const logout = (req, res) => {
  return res.send({ message: 'Hola desde logout!'});
}

module.exports = {register, login, logout};
