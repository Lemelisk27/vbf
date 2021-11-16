const {Allergyjoins} = require("../models")

const allergyJoinsData = [
    {
        id: 1,
        AnimalId: 6,
        AllergyId: 6
    },
    {
        id: 2,
        AnimalId: 6,
        AllergyId: 1
    },
    {
        id: 3,
        AnimalId: 6,
        AllergyId: 4
    },
    {
        id: 4,
        AnimalId: 9,
        AllergyId: 5
    },
    {
        id: 5,
        AnimalId: 9,
        AllergyId: 2
    },
    {
        id: 6,
        AnimalId: 9,
        AllergyId: 3
    },
    {
        id: 7,
        AnimalId: 9,
        AllergyId: 4
    }
]

const seedAllergyjoins = () => Allergyjoins.bulkCreate(allergyJoinsData)

module.exports = seedAllergyjoins