const User = require('../models/user')

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
            res.status(200).json({message: 'user tim thay', user: user})
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
    
    const user = new User({user_name: user_name, password: password, email: email})
    user
        .save()
        .then(result => {
            res.status(201).json({
                message: 'user created successfully',
                user: result
            })
        })
        .catch(err => {
            if (!err.status) {
                err.status = 500
            }
            next(err)
        })
}

// edit and update user

exports.updateUser = (req, res, next) => {
    const id = req.params.id
    const user_name = req.body.user_name
    const password = req.body.password
    const email = req.body.email
    User.findByPk(id)
    .then(user => {
        if (!user) {
            const error = new Error('Khong tim thay user')
            error.status(404)
            throw error
        }
        user.user_name = user_name
        user.password = password
        user.email = email

        return user.save()
    })
    .then(result => {
        res.status(200).json({message: 'user update successfully', user: result})
    })
    .catch(err=> {
        if (!err.status) {
            err.status = 500
        }
        next(err)
    })
}

// delete user

exports.deleteUser = (req, res, next) => {
    const id = req.params.id
    User.destroy({
        where: {id}
    })
    .then((deletedRecord) => {
        if (deletedRecord === 1) {
            res.status(200).json({message:"Deleted successfully"});
        }else{
            res.status(404).json({message:"record delete error"})
        }
    })
    .catch((error) => {
        res.status(500).json(error);
    });
}

// login

exports.checkLogin = (req, res, next) => {
    const user_name = req.body.user_name
    const password = req.body.password
    User.findOne({where: {user_name: user_name}})
        .then((user) => {
            if (!user) {
                res.status(201).json({message: 'user ko ton tai'})
            }else{
                if (user.password === password) {
                    console.log(password);
                    res.status(201).json({message: 'login successfully', user: user})
                } else {
                    res.status(201).json({message: 'login fail ( wrong password )'})
                }
            }
        })
        .catch(err => {
            if (!err) {
                err.status = 500
            }
            next(err)
        })
}