const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Unit extends Model {}

Unit.init({
    unit_name: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    sequelize,
    timestamps: false 
})

module.exports = Unit