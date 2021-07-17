
const {sequelize, DataTypes, Model} = require('./db');
class Restaurant extends Model {
	//add custom methods for advanced querying
}

Restaurant.init({
	name: DataTypes.STRING,
    cuisine: DataTypes.STRING,
	location: DataTypes.STRING
	
}, {
	sequelize,
	timestamps: false,
});


module.exports = {Restaurant}