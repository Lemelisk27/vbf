const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Clinic extends Model {}

Clinic.init({
    name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    street: {
        type: DataTypes.STRING,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false
    },
    zip: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    sequelize,
    timestamps: false
})

module.exports = Clinic