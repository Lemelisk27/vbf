const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Inventory extends Model {}

Inventory.init({
    category_name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    }
},
{
    sequelize,
    timestamps: false
})

module.exports = Inventory