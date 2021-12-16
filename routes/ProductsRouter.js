const express = require('express');
const router = express.Router();
const {ProductsController} = require('../controllers');
//CRUD - Productos
//Create - POST
router.post('/', ProductsController.createProduct);

//Read All - GET
router.get('/', ProductsController.findAllProduct);

//Read One - GET
router.get('/:id', ProductsController.findOneProduct);

//Update - PUT
router.put('/:id', ProductsController.updateProduct);

//Delete - DELETE
router.delete('/:id', ProductsController.deleteProduct);

//Destroy - DELETE
router.delete('/:id/destroy', ProductsController.destroyProduct);




module.exports = router;
