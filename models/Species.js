const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Species extends Model {}

Species.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
},
{
    sequelize,
    timestamps: false
})

module.exports = Species