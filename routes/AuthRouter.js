const express = require('express');
const router = express.Router();
const {AuthController} = require('../controllers');
const {AuthValidator} = require('../validators');
//AUTH Usuarios
//Register - POST
router.post('/register', AuthValidator, AuthController.register);

//Login - POST
router.post('/login', AuthValidator, AuthController.login);

//Logout - POST
router.post('/logout', AuthController.logout);



module.exports = router;
