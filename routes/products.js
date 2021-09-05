const express = require('express');
const router = express.Router();
const productController = require('../controllers/products')

router.get('/', productController.getAll);
router.get('/:id', productController.getIdProduct);
router.post('/post', productController.createProduct);
router.put('/put/:id', productController.updateProduct);
router.delete('/remove/:id', productController.deleteProduct);

module.exports = router;