const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Client extends Model {}

Client.init({
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    street: {
        type: DataTypes.TEXT,
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
        type: DataTypes.INTEGER,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        validate:{
            isEmail: true
        }
    },
    work: {
        type: DataTypes.STRING,
        validate:{
            len:[10]
        }
    },
    home: {
        type: DataTypes.STRING,
        validate:{
            len:[10]
        }
    },
    cell: {
        type: DataTypes.STRING,
        validate:{
            len:[10]
        }
    },
    alt: {
        type: DataTypes.STRING,
        validate:{
            len:[10]
        }
    }
},
{
    sequelize,
    timestamps: false
})

module.exports = Client