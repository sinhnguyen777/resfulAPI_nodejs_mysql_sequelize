const { Sequelize } = require('sequelize');
const mysql2 = require('mysql2')
const sequelize = new Sequelize('book_store', 'root', '', {
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: ''
})  

sequelize.authenticate()
    .then(() => {
        console.log('successfully database connection ');
    })

module.exports = sequelize;
