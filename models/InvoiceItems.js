const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Invoiceitems extends Model {}

Invoiceitems.init({
    item_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    item_name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    item_cost: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    item_qty: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    item_price : {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    }
},
{
    sequelize,
    timestamps: false
})

module.exports = Invoiceitems