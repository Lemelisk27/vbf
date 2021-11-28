const {Appt} = require("../models")

const apptData = [
    {
        id: 1,
        title: "Nail Trim",
        start_date: new Date(2021, 11, 1, 1, 30),
        end_date: new Date(2021, 11, 1, 2, 0),
        notes: "Really needs this",
        AnimalId: 1
    },
    {
        id: 2,
        title: "Annual Exam",
        start_date: new Date(2021, 11, 1, 2, 30),
        end_date: new Date(2021, 11, 1, 3, 0),
        notes: "Make sure nose is cold and wet",
        AnimalId: 2
    },
    {
        id: 3,
        title: "Lump Eval",
        start_date: new Date(2021, 11, 1, 3, 15),
        end_date: new Date(2021, 11, 1, 3, 45),
        notes: "Lump isn't anything but owner wants it checked.",
        AnimalId: 3
    }
]

const seedAppts = () => Appt.bulkCreate(apptData)

module.exports = seedAppts