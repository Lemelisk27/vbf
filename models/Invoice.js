const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Invoice extends Model {}

Invoice.init({
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    subtotal: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    tax: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    total: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    paid: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false,
        defaultValue: 0
    },
    due: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    full_paid: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
},
{
    sequelize,
    timestamps: false
})

module.exports=Invoice