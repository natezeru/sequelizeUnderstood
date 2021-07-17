// creation of the database

const {Sequelize, DataTypes, Model} = require('sequelize')
const sequelize = new Sequelize('database', 'usernanme', 'password', {  //creates database
    dialect:"sqlite",    //database type                          //configuring the database
    storage: './restuarants.sqlite',  // path to where database is store
    logging: false
})


module.exports = {sequelize, DataTypes, Model};  //export your sequelize database