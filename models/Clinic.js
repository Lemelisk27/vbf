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
    },
    phone: {
        type: DataTypes.STRING,
        validate:{
            len:[10]
        }
    },
    email: {
        type: DataTypes.STRING,
        validate: {
            isEmail: true
        }
    },
    tax_rate: {
        type: DataTypes.DECIMAL(10,2)
    },
    img: {
        type: DataTypes.TEXT
    },
    site: {
        type: DataTypes.TEXT
    }
},
{
    sequelize,
    timestamps: false
})

module.exports = Clinic