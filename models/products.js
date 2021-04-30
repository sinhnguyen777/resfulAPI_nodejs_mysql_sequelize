const Sequelize = require('sequelize')
const sequelize = require('../utils/db');

const Product = sequelize.define('product', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    img: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    price_sale: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    id_catalog: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        foreignKey: true,

    },
    hot: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    content: {
        type: Sequelize.STRING,
        allowNull: false
    },
    view: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, { freezeTableName: true, timestamps: false })

// Product.belongsTo(product, {foreignKey: 'id_catalog'});

module.exports = Product;

