const {Role} = require("../models")

const roleData = [
    {
        id: 1,
        title: "Veterinarian"
    },
    {
        id: 2,
        title: "Vet Tech"
    },
    {
        id: 3,
        title: "Front Desk"
    }
]

const seedRoles = () => Role.bulkCreate(roleData)

module.exports = seedRoles