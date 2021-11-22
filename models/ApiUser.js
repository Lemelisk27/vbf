const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require("bcrypt");

class Apiuser extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
      }
}

Apiuser.init({
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len:[8]
        }
    }
},
{
    hooks:{
        beforeCreate(newUser){
            newUser.password = bcrypt.hashSync(newUser.password,10)
            return newUser
        },
        beforeUpdate(updatedUser){
            updatedUser.password = bcrypt.hashSync(updatedUser.password,10);
            return updatedUser;
        }
    },
    sequelize,
    timestamps: false
})

module.exports=Apiuser