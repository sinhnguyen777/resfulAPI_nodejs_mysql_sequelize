const Sequelize = require('sequelize')
const sequelize = require('../utils/db');

const Category = sequelize.define('catalog', {
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
    sort: {
        type: Sequelize.TINYINT,
        allowNull: false
    },
    hot: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    parent: {
        type: Sequelize.INTEGER,
        allowNull: false
    }

}, { freezeTableName: true, timestamps: false })

module.exports = Category