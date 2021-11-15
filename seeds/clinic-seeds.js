const {Clinic} = require("../models")

const clinicData = [
    {
        id: 1,
        name: "Local Vet",
        street: "555 Local Vet Blvd",
        city: "Someplace",
        state: "WA",
        zip: "98045"
    }
]

const seedClinics = () => Clinic.bulkCreate(clinicData)

module.exports = seedClinics