const {sequelize, DataTypes, Model} = require('./db');

class Item extends Model{}

Item.init({
	name: DataTypes.STRING,
	price: DataTypes.NUMBER
},{

    sequelize,
    timestamp:false
})

module.exports = {Item}