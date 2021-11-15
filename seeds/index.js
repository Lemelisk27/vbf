const seedUsers = require("./user-seeds")
const seedRoles = require("./role-seeds")
const seedClients = require("./client-seeds")
const seedAnimals = require("./animal-seeds")
const seedSpecies = require("./species-seeds")
const seedBreeds = require("./breed-seeds")
const seedClinics = require("./clinic-seeds")

const sequelize = require("../config/connection")

const seedAll = async () => {
    await sequelize.sync({force: true});
    console.log('\n-----DATABASE SYNCED-----\n')
    await seedClinics()
    console.log('\n-----CLINICS SYNCED-----\n')
    await seedRoles()
    console.log('\n-----ROLES SYNCED-----\n')
    await seedUsers()
    console.log('\n-----USERS SYNCED-----\n')
    await seedClients()
    console.log('\n-----CLIENTS SYNCED-----\n')
    await seedSpecies()
    console.log('\n-----SPECIES SYNCED-----\n')
    await seedBreeds()
    console.log('\n-----BREEDS SYNCED-----\n')
    await seedAnimals()
    console.log('\n-----ANIMALS SYNCED-----\n')
    process.exit(0)
}

seedAll()