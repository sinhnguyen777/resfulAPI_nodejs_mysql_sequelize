const express = require('express');
const router = express.Router();
const productController = require('../controllers/products')

router.get('/products', productController.getAll);
router.get('/products/:id', productController.getIdProduct);
router.post('/addNew', productController.createProduct);
router.put('/update/:id', productController.updateProduct);
router.delete('/delete/:id', productController.deleteProduct);

module.exports = router;