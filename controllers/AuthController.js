const { AuthModel } = require('../models')

const register = (req, res) => {
  const {body} = req;
  return AuthModel.create(body)
    .then(newUser => {
      res.status(200).send({ message: 'Usuario creado!', newUser});
    })
    .catch(err => {
      res
        .status(400)
        .send({message: 'Error creando usuario!', error: err.message});
      });
};

const login = (req, res) => {
  return res.send({ message: 'Hola desde login!'});
}

const logout = (req, res) => {
  return res.send({ message: 'Hola desde logout!'});
}

module.exports = {register, login, logout};
