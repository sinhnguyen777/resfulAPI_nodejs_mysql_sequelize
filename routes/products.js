const express = require('express');
const router = express.Router();
const productController = require('../controllers/products')

router.get('/products', productController.getAll);
router.get('/products/:id', productController.getIdProduct);
router.post('/addProduct', productController.createProduct);
router.put('/updateProduct/:id', productController.updateProduct);
router.delete('/deleteProduct/:id', productController.deleteProduct);

module.exports = router;