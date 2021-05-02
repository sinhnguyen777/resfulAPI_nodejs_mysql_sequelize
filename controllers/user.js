const User = require('../models/user')
const bycript = require('bcrypt')
const jwt = require('jsonwebtoken')
// const { use } = require('../routes/user')

// show all user

exports.getAllUser = (req, res) => {
    User.findAll()
        .then(user => {
            res.status(200).json({ message: 'Hello product sucessfully', user: user });
        })
        .catch(err => {
            res.status(500).json({ message: err })
        })
}

// show user by id

exports.getIdUser = (req, res, next) => {
    const id = req.params.id
    User.findByPk(id)
        .then(user => {
            if (!user) {
                const error = new Error('khong tim thay user')
                error.status(404)
                throw error
            }
            res.status(200).json({ message: 'user tim thay', user: user })
        })
        .catch(err => {
            if (!err) {
                err.status = 500
            }
            next(err)
        })
}

// add new user

exports.createUser = (req, res, next) => {
    const user_name = req.body.user_name
    const password = req.body.password
    const email = req.body.email

    User.findOne({
        where: { user_name: user_name }
    })
        .then(user => {
            if (user) {
                return res.status(400).json({ message: 'user da ton tai' })
            }
            return bycript.hash(password, 12)
        })
        .then(hashedPassword => {
            const user = new User({ user_name: user_name, password: hashedPassword, email: email })
            return user.save()
        })
        .then(user => {
            res.status(201).json({
                message: 'created successfully',
                user: user
            });
        })
        .catch(err => res.status(400).json(err))
}

// edit and update user

// exports.updateUser = (req, res, next) => {
//     const id = req.params.id
//     const user_name = req.body.user_name
//     const password = req.body.password
//     const email = req.body.email
//     User.findByPk(id)
//     .then(user => {
//         if (!user) {
//             const error = new Error('Khong tim thay user')
//             error.status(404)
//             throw error
//         }
//         user.user_name = user_name
//         user.password = password
//         user.email = email

//         return user.save()
//     })
//     .then(result => {
//         res.status(200).json({message: 'user update successfully', user: result})
//     })
//     .catch(err=> {
//         if (!err.status) {
//             err.status = 500
//         }
//         next(err)
//     })
// }

// delete user

// update user

exports.updateUser = (req, res, next) => {
    const user_name = req.body.user_name
    const password = req.body.password
    const email = req.body.email

    User.findOne({ where: { user_name: user_name } })
        .then(user => {
            if (!user) {
                return res.status(400).json({ message: 'user khong ton tai' })
            }
            return bycript.hash(password, 12)
        })
        .then(hashedPassword => {
            const user = new Object({ user_name: user_name, password: hashedPassword, email: email })
            return User.update(user, { where: { user_name: user.user_name } })
        })
        .then(num => {
            if (num == 1) {
                return res.status(201).json({
                    message: 'update successfully',
                    user: num
                });
            } else {
                return res.status(201).json({
                    message: 'update fail',
                    user: num
                });
            }
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

exports.deleteUser = (req, res, next) => {
    const id = req.params.id
    User.destroy({
        where: { id }
    })
        .then((deletedRecord) => {
            if (deletedRecord === 1) {
                res.status(200).json({ message: "Deleted successfully" });
            } else {
                res.status(404).json({ message: "record delete error" })
            }
        })
        .catch((error) => {
            res.status(500).json(error);
        });
}

// login

exports.checkLogin = (req, res) => {
    const user_name = req.body.user_name
    const password = req.body.password
    User.findOne({ where: { user_name: user_name } })
        .then((user) => {
            if (!user) {
                return res.status(201).json({ message: 'user ko ton tai' })
            }
            return Promise.all([bycript.compare(password, user.password), user])
        })
        .then(isMatch => {
            
            if (!isMatch) {
                return res.status(400).json({message: 'Sai password'})
            }
            const payLoad = {
                user_name: isMatch.user_name,
                // typeUser: user.typeUser
            }
            return jwt.sign(payLoad,'fptHCM', {expiresIn: 3600})
        })
        .then(token => {
            res.status(200).json({message: 'Login successfully', token})
        })
        .catch(err => {
            return res.status(500).json(err)
        })
}