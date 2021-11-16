const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Inventoryitems extends Model {}

Inventoryitems.init({
    item_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cost: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    qty: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},
{
    sequelize,
    timestamps: false 
})

module.exports = Inventoryitems