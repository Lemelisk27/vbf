const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Allergy extends Model {}

Allergy.init({
    alergy_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
},
{
    sequelize,
    timestamps: false
})

module.exports = Allergy