const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Breed extends Model {}

Breed.init({
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

module.exports = Breed