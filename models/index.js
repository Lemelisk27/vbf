const User = require("./User")
const Role = require("./Role")
const Client = require("./Client")
const Animal = require("./Animal")
const Species = require("./Species")
const Breed = require("./Breed")
const Clinic = require("./Clinic")
const Allergy = require("./Allergy")
const Allergyjoins = require("./AllergyJoins")

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

Clinic.hasMany(User)

User.belongsTo(Clinic)

Clinic.hasMany(Client)

Client.belongsTo(Clinic)

Animal.belongsToMany(Allergy,{
    through: Allergyjoins,
    foreignKey: "AnimalId",
    otherKey: "AllergyId"
})

Allergy.belongsToMany(Animal, {
    through: Allergyjoins,
    foreignKey: "AllergyId",
    otherKey: "AnimalId"
})

module.exports={
    User,
    Role,
    Client,
    Animal,
    Species,
    Breed,
    Clinic,
    Allergy,
    Allergyjoins
}