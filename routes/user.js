const express = require('express');
const router = express.Router();

const userController = require('../controllers/user')

router.get('/', userController.getAllUser)
// router.get('/:id', userController.getIdUser)
router.post('/create', userController.createUser)
router.post('/update', userController.updateUser)
router.delete('/delete/:id', userController.deleteUser)

// login and register

router.post('/login', userController.checkLogin)


module.exports = router;
