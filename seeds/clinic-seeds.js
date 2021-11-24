const {Clinic} = require("../models")

const clinicData = [
    {
        id: 1,
        name: "Local Vet",
        street: "555 Local Vet Blvd",
        city: "Someplace",
        state: "WA",
        zip: "98045",
        phone: "425-555-1234",
        email: "LocalVet@vet.vet"
    }
]

const seedClinics = () => Clinic.bulkCreate(clinicData)

module.exports = seedClinics