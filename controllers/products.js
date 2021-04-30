const Product = require('../models/products')

// show all
exports.getAll = (req, res) => {
    Product.findAll()
        .then(product => {
            res.status(200).json({ message: 'Hello product sucessfully', products: product });
        })
        .catch(err => {
            res.status(500).json({ message: err })
        })
}

// show by ID
exports.getIdProduct = (req, res, next) => {
    const id = req.params.id
    Product.findByPk(id)
        .then((product => {
            if (!product) {
                const error = new Error('Khong tim thay product')
                error.status(404)
                throw error
            }
            res.status(200).json({ message: 'product tim thay', product: product })
        }))
        .catch(err => {
            if (!err.status) {
                err.status(500)
            }
            next(err)
        })
}

// add new product
exports.createProduct = (req, res, next) => {
    const name = req.body.name
    const img = req.body.img
    const price = req.body.price
    const price_sale = req.body.price_sale
    const id_catalog = req.body.id_catalog
    const hot = req.body.hot
    const content = req.body.content
    const view = req.body.view

    const products = new Product({name: name, img: img, price: price, price_sale: price_sale, id_catalog: id_catalog, hot: hot, content: content, view: view})
    products
        .save()
        .then(result => {
            res.status(201).json({
                message: 'product created successfully',
                products: result
            })
        })
        .catch(err => {
            if (!err.status) {
                err.status = 500
            }
            next(err)
        })
}

// edit and update product

exports.updateProduct = (req, res, next) => {
    const id = req.params.id
    const name = req.body.name
    const img = req.body.img
    const price = req.body.price
    const price_sale = req.body.price_sale
    const id_catalog = req.body.id_catalog
    const hot = req.body.hot
    const content = req.body.content
    const view = req.body.view

    Product.findByPk(id)

        .then(product => {
            if (!product) {
                const error = new Error('Khong tim thay product')
                error.status(404)
                throw error
            }
            product.name = name
            product.img = img
            product.price = price
            product.price_sale = price_sale
            product.id_catalog = id_catalog
            product.hot = hot
            product.content = content
            product.view = view

            return product.save()
        })
        .then(result => {
            res.status(200).json({message: 'product update successfully', product: result})
        })
        .catch(err => {
            if (!err.status) {
                err.status = 500
            }
            next(err)
        })
}

// delete product id

exports.deleteProduct = (req, res) => {
    const id = req.params.id
    Product.destroy({
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