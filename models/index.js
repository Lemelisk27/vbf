const User = require("./User")
const Role = require("./Role")
const Client = require("./Client")
const Animal = require("./Animal")

User.belongsTo(Role)

Role.hasOne(User)

Client.hasMany(Animal,{
    onDelete: "CASCADE"
})

Animal.belongsTo(Client)

module.exports={
    User,
    Role,
    Client,
    Animal
}