const {Species} = require("../models")

const speciesData = [
    {
        id: 1,
        name: "Dog"
    },
    {
        id: 2,
        name: "Cat"
    },
    {
        id: 3,
        name: "Bird"
    },
    {
        id: 4,
        name: "Reptile"
    }
]

const seedSpecies = () => Species.bulkCreate(speciesData)

module.exports = seedSpecies