const {sequelize, DataTypes, Model} = require('./db');
const { Item } = require('./Item');
const { Menu } = require('./Menu');
const { Restaurant } = require('./Restaurant');


Restaurant.hasMany(Menu)  //gives sequelize magic method

Item.belongsTo(Menu) //adds foriegn key to Menu

Menu.belongsTo(Restaurant)  //adds foriegn key to Resturant
Menu.hasMany(Item)  //gives sequelize magic method

module.exports = {Restaurant , Menu, Item };
