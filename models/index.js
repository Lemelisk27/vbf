const User = require("./User")
const Role = require("./Role")
const Client = require("./Client")
const Animal = require("./Animal")
const Species = require("./Species")
const Breed = require("./Breed")

User.belongsTo(Role)

Role.hasOne(User)

Client.hasMany(Animal,{
    onDelete: "CASCADE"
})

Animal.belongsTo(Client)

Species.hasMany(Animal)

Animal.belongsTo(Species)

Species.hasMany(Breed,{
    onDelete: "CASCADE"
})

Breed.hasMany(Animal)

Animal.belongsTo(Breed)

Breed.belongsTo(Species)

module.exports={
    User,
    Role,
    Client,
    Animal,
    Species,
    Breed
}