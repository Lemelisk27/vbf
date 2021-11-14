const seedUsers = require("./user-seeds")
const seedRoles = require("./role-seeds")

const sequelize = require("../config/connection")

const seedAll = async () => {
    await sequelize.sync({force: true});
    console.log('\n-----DATABASE SYNCED-----\n')
    await seedRoles()
    console.log('\n-----ROLES SYNCED-----\n')
    await seedUsers()
    console.log('\n-----USERS SYNCED-----\n')
    process.exit(0)
}

seedAll()