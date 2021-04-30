const Category = require('../models/category')
const category = []
exports.getAllCategory = (req, res) => {
    Category.fetchAllCategory()
    .then(cata => {
        console.log(cata);
        res.status(200).json({ message: 'Hello category sucessfully', cata: cata })
    })
    .catch(err => {
        res.status(500).json({message: err})
    })
}