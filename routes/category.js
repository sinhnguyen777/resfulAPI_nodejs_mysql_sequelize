var express = require('express');
var router = express.Router();
var categoryController = require('../controllers/category')

router.get('/categorys', categoryController.getAllCategory);
router.get('/categorys/:id', categoryController.getIdCategory);
router.post('/addCategory', categoryController.createCategory);
router.put('/updateCategorys/:id', categoryController.updateCategory);
router.delete('/deleteCategorys/:id', categoryController.deleteCategory);

module.exports = router;