const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Appt extends Model {}

Appt.init({
    title: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    start_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    end_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    notes: {
        type: DataTypes.TEXT
    }
},
{
    sequelize,
    timestamps: false
})

module.exports = Appt