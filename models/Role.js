const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Role extends Model {}

Role.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    sequelize,
    timestamps: false
})

module.exports=Role