const express = require('express');
const router = express.Router();

const userController = require('../controllers/user')

router.get('/user', userController.getAllUser)
router.get('/user/:id', userController.getIdUser)
router.post('/addUser', userController.createUser)
router.put('/user/:id', userController.updateUser)
router.delete('/user/:id', userController.deleteUser)

// login and register

router.post('/login', userController.checkLogin)


module.exports = router;
