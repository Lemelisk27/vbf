const {Allergy} = require("../models")

const allergyData = [
    {
        id: 1,
        alergy_name: "Grass"
    },
    {
        id: 2,
        alergy_name: "Mold Spores"
    },
    {
        id: 3,
        alergy_name: "Dander"
    },
    {
        id: 4,
        alergy_name: "Dust Mites"
    },
    {
        id: 5,
        alergy_name: "Fleas"
    },
    {
        id: 6,
        alergy_name: "Chicken"
    },
    {
        id: 7,
        alergy_name: "Pork"
    },
    {
        id: 8,
        alergy_name: "Ketamine"
    }
]

const seedAllergies = () => Allergy.bulkCreate(allergyData)

module.exports = seedAllergies