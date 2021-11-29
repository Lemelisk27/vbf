const {Appt} = require("../models")

const apptData = [
    {
        id: 1,
        title: "Nail Trim",
        startDate: new Date(2021, 11, 1, 8, 45),
        endDate: new Date(2021, 11, 1, 9, 15),
        notes: "Really needs this",
        AnimalId: 1
    },
    {
        id: 2,
        title: "Annual Exam",
        startDate: new Date(2021, 11, 2, 13, 15),
        endDate: new Date(2021, 11, 2, 14, 15),
        notes: "Make sure nose is cold and wet",
        AnimalId: 2
    },
    {
        id: 3,
        title: "Lump Eval",
        startDate: new Date(2021, 11, 3, 16, 30),
        endDate: new Date(2021, 11, 3, 17, 0),
        notes: "Lump isn't anything but owner wants it checked.",
        AnimalId: 3
    },
    {
        id: 4,
        title: "Vaccines",
        startDate: new Date(2021, 11, 6, 12, 00),
        endDate: new Date(2021, 11, 6, 12, 15),
        notes: "Vaccines",
        AnimalId: 4
    },
    {
        id: 5,
        title: "Annual Exam",
        startDate: new Date(2021, 11, 7, 14, 00),
        endDate: new Date(2021, 11, 7, 14, 30),
        notes: "Annual Exam",
        AnimalId: 5
    },
    {
        id: 6,
        title: "Nail Trim",
        startDate: new Date(2021, 11, 8, 18, 00),
        endDate: new Date(2021, 11, 8, 18, 15),
        notes: "Nail Trim",
        AnimalId: 6
    },
    {
        id: 7,
        title: "Post-Op Checkup",
        startDate: new Date(2021, 11, 9, 12, 00),
        endDate: new Date(2021, 11, 9, 12, 30),
        notes: "Post-Op Checkup",
        AnimalId: 7
    },
    {
        id: 8,
        title: "Pre-Op Checkup",
        startDate: new Date(2021, 11, 10, 12, 15),
        endDate: new Date(2021, 11, 10, 12, 45),
        notes: "Pre-Op Checkup",
        AnimalId: 8
    },
    {
        id: 9,
        title: "Surgery: Spay/Nuter",
        startDate: new Date(2021, 11, 13, 13, 45),
        endDate: new Date(2021, 11, 13, 15, 15),
        notes: "Surgery: Spay/Nuter",
        AnimalId: 9
    },
    {
        id: 10,
        title: "Vaccines",
        startDate: new Date(2021, 11, 14, 8, 00),
        endDate: new Date(2021, 11, 14, 8, 15),
        notes: "Vaccines",
        AnimalId: 10
    },
    {
        id: 11,
        title: "Annual Exam",
        startDate: new Date(2021, 11, 15, 14, 15),
        endDate: new Date(2021, 11, 15, 14, 45),
        notes: "Annual Exam",
        AnimalId: 11
    },
    {
        id: 12,
        title: "Nail Trim",
        startDate: new Date(2021, 11, 16, 17, 15),
        endDate: new Date(2021, 11, 16, 17, 30),
        notes: "Nail Trim",
        AnimalId: 12
    },
    {
        id: 13,
        title: "Post-Op Checkup",
        startDate: new Date(2021, 11, 17, 14, 00),
        endDate: new Date(2021, 11, 17, 14, 30),
        notes: "Post-Op Checkup",
        AnimalId: 13
    },
    {
        id: 14,
        title: "Vaccines",
        startDate: new Date(2021, 11, 20, 10, 15),
        endDate: new Date(2021, 11, 20, 10, 30),
        notes: "Vaccines",
        AnimalId: 14
    },
    {
        id: 15,
        title: "Closed: Christmas Eve",
        startDate: new Date(2021, 11, 24, 16, 00),
        endDate: new Date(2021, 11, 24, 23, 59),
        notes: "Closed for Christmas Eve"
    },
    {
        id: 16,
        title: "Closed: Christmas Day",
        startDate: new Date(2021, 11, 25, 00, 01),
        endDate: new Date(2021, 11, 25, 23, 59),
        notes: "Closed for Christmas Day"
    },
    {
        id: 17,
        title: "Post-Op Checkup",
        startDate: new Date(2021, 11, 20, 16, 15),
        endDate: new Date(2021, 11, 20, 16, 45),
        notes: "Post-Op Checkup",
        AnimalId: 9
    },
    {
        id: 18,
        title: "Vaccines",
        startDate: new Date(2021, 11, 17, 14, 30),
        endDate: new Date(2021, 11, 17, 14, 45),
        notes: "Vaccines",
        AnimalId: 1
    },
    {
        id: 19,
        title: "Annual Exam",
        startDate: new Date(2021, 11, 16, 8, 30),
        endDate: new Date(2021, 11, 16, 9, 00),
        notes: "Annual Exam",
        AnimalId: 2
    },
    {
        id: 20,
        title: "Nail Trim",
        startDate: new Date(2021, 11, 15, 9, 30),
        endDate: new Date(2021, 11, 15, 10, 0),
        notes: "Nail Trim",
        AnimalId: 3
    },
    {
        id: 21,
        title: "Annual Exam",
        startDate: new Date(2021, 11, 14, 11, 00),
        endDate: new Date(2021, 11, 14, 11, 30),
        notes: "Annual Exam",
        AnimalId: 4
    },
    {
        id: 22,
        title: "Vaccines",
        startDate: new Date(2021, 11, 13, 18, 00),
        endDate: new Date(2021, 11, 13, 18, 15),
        notes: "Vaccines",
        AnimalId: 5
    },
    {
        id: 23,
        title: "Post-Op Checkup",
        startDate: new Date(2021, 11, 10, 15, 45),
        endDate: new Date(2021, 11, 10, 16, 15),
        notes: "Post-Op Checkup",
        AnimalId: 6
    },
    {
        id: 24,
        title: "Lump Eval",
        startDate: new Date(2021, 11, 9, 14, 30),
        endDate: new Date(2021, 11, 9, 15, 0),
        notes: "Lump isn't anything but owner wants it checked.",
        AnimalId: 7
    },
    {
        id: 25,
        title: "Annual Exam",
        startDate: new Date(2021, 11, 8, 10, 30),
        endDate: new Date(2021, 11, 8, 11, 0),
        notes: "Annual Exam",
        AnimalId: 8
    },
    {
        id: 26,
        title: "Vaccines",
        startDate: new Date(2021, 11, 7, 13, 15),
        endDate: new Date(2021, 11, 7, 13, 30),
        notes: "Vaccines",
        AnimalId: 10
    },
    {
        id: 27,
        title: "Surgery: Spay/Nuter",
        startDate: new Date(2021, 11, 6, 12, 45),
        endDate: new Date(2021, 11, 6, 14, 15),
        notes: "Surgery: Spay/Nuter",
        AnimalId: 11
    },
    {
        id: 28,
        title: "Vaccines",
        startDate: new Date(2021, 11, 3, 9, 15),
        endDate: new Date(2021, 11, 3, 9, 30),
        notes: "Vaccines",
        AnimalId: 12
    },
    {
        id: 29,
        title: "Nail Trim",
        startDate: new Date(2021, 11, 2, 18, 15),
        endDate: new Date(2021, 11, 2, 18, 45),
        notes: "Nail Trim",
        AnimalId: 13
    },
    {
        id: 30,
        title: "Annual Exam",
        startDate: new Date(2021, 11, 1, 11, 15),
        endDate: new Date(2021, 11, 1, 12, 15),
        notes: "Annual Exam",
        AnimalId: 14
    },
    {
        id: 31,
        title: "Test Appt First",
        startDate: new Date(2021, 9, 1, 11, 15),
        endDate: new Date(2021, 9, 1, 12, 15),
        notes: "Test Appt",
        AnimalId: 10
    },
    {
        id: 32,
        title: "Test Appt Second",
        startDate: new Date(2021, 8, 1, 11, 15),
        endDate: new Date(2021, 8, 1, 12, 15),
        notes: "Test Appt Second",
        AnimalId: 10
    }
]

const seedAppts = () => Appt.bulkCreate(apptData)

module.exports = seedAppts