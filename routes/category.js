var express = require('express');
var router = express.Router();
var categoryController = require('../controllers/category')

router.get('/', categoryController.getAllCategory);
router.get('/:id', categoryController.getIdCategory);
router.post('/post', categoryController.createCategory);
router.put('/put/:id', categoryController.updateCategory);
router.delete('/remove/:id', categoryController.deleteCategory);

module.exports = router;