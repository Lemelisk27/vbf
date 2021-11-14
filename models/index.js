const User = require("./User")
const Role = require("./Role")
const Client = require("./Client")
const Animal = require("./Animal")
const Species = require("./Species")

User.belongsTo(Role)

Role.hasOne(User)

Client.hasMany(Animal,{
    onDelete: "CASCADE"
})

Animal.belongsTo(Client)

Species.hasMany(Animal)

Animal.belongsTo(Species)

module.exports={
    User,
    Role,
    Client,
    Animal,
    Species
}