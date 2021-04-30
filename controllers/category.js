const Category = require('../models/category')

// show all category

exports.getAllCategory = (req, res) => {
    Category.findAll()
        .then(cata => {
            res.status(200).json({ message: 'Hello category sucessfully', catalog: cata })
        })
        .catch(err => {
            res.status(500).json({ message: err })
        })
}

// show category by id

exports.getIdCategory = (req, res, next) => {
    const id = req.params.id
    Category.findByPk(id)
        .then(category => {
            if (!category) {
                const error = new Error ('khong tim thay category')
                error.status(404)
                throw error
            }
            res.status(200).json({message: 'category tim thay', catalog: category})
        })
        .catch(err => {
            if (!err.status) {
                err.status(500)
            }
            next(err)
        })
}

// add category

exports.createCategory = (req, res, next) => {
    const name = req.body.name
    const sort = req.body.sort
    const hot = req.body.hot
    const parent = req.body.parent

    const category = new Category({name:name, sort: sort, hot: hot, parent: parent})
    category
        .save()
        .then(result => {
            res.status(201).json({
                message: 'category created succesfully',
                category: result
            })
        })
        .catch(error => {
            if (!error) {
                error.status = 500
            }
            next(error)
        })
}

// edit and update category

exports.updateCategory = (req, res, next) => {
    const id = req.params.id
    const name = req.body.name
    const sort = req.body.sort
    const hot = req.body.hot
    const parent = req.body.parent

    Category.findByPk(id)
        .then(category => {
            if (!category) {
                const error = new Error('khong tim thay category')
                error.status(404)
                throw error
            }
            category.name = name
            category.sort = sort
            category.hot = hot
            category.parent = parent

            return category.save()
        })
        .then(result => {
            res.status(200).json({message: 'category update successfullly', category: result})
        })
        .catch(error => {
            if (!error) {
                error.status = 500
            }
            next(error)
        })
}

exports.deleteCategory = (req, res, next)  => {
    const id = req.params.id
    Category.destroy({
        where: {id}
    })
    .then((deletedRecord) => {
        if (deletedRecord === 1) {
            res.status(200).json({message:"Deleted successfully"});
        }else {
            res.status(404).json({message:"record delete error"})
        }
    })
    .catch(err => {
        res.status(500).json(err);
    })
}