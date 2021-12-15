const express = require('express');
const router = express.Router();
const AuthRoutes = require('./AuthRoutes');
const ProductsRoutes = require('./ProductsRoutes');


router.use('/auth',AuthRoutes);
router.use('/products',ProductsRoutes);

module.exports = router;
