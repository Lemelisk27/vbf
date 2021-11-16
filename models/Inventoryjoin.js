const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Inventoryjoin extends Model {}

Inventoryjoin.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
    },
    InventoryId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    InventoryitemsId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},
{
    sequelize,
    timestamps: false 
})

module.exports = Inventoryjoin