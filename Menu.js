
const {sequelize, DataTypes, Model} = require('./db');
class Menu extends Model {}

Menu.init({
	name: DataTypes.STRING,
	
},{
    sequelize,
    timestamp:false
})


module.exports = {Menu}