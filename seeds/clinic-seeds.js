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
        email: "LocalVet@vet.vet",
        tax_rate: 6.5,
        img: "https://res.cloudinary.com/coder-mingle/image/upload/v1638569076/portfolio/clinic_logo_rvoi8q.png",
        site: "https://vetbestfriend.herokuapp.com"
    }
]

const seedClinics = () => Clinic.bulkCreate(clinicData)

module.exports = seedClinics