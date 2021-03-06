const express = require('express');
const router = express.Router();

const userController = require('../controllers/user')
const auth = require('../middleware/auth')

router.get('/', userController.getAllUser)
router.get('/:id', auth.authentication, userController.getIdUser)
router.post('/post', userController.createUser)
router.post('/put/:id', userController.updateUser)
router.delete('/remove/:id', userController.deleteUser)

// login and register

router.post('/login', userController.checkLogin)
// router.get('/private', auth.authentication)

module.exports = router;
