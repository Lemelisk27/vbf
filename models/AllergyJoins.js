const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Allergyjoins extends Model {}

Allergyjoins.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    AnimalId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false
    },
    AllergyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false
    }
},
{
    sequelize,
    timestamps: false
})

module.exports = Allergyjoins