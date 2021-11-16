const {Unit} = require("../models")

const unitData = [
    {
        id: 1,
        unit_name: "dose"
    },
    {
        id: 2,
        unit_name: "ml"
    },
    {
        id: 3,
        unit_name: "each"
    }
]

const seedUnits = () => Unit.bulkCreate(unitData)

module.exports = seedUnits