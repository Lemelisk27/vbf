const {Appt} = require("../models")

const buildAppts = () => {
    const apptNbr = 60
    const pets = 14
    const month = 11
    const days = 31
    const year = 2021
    const offset = 8
    const titles = ["Nail Trim", "Annual Exam", "Lump Eval", "Vaccines", "Post-Op Checkup", "Pre-Op Checkup", "Surgery: Spay/Nuter"]
    const notes = ["Really needs this", "Make sure nose is cold and wet", "Lump isn't anything but owner wants it checked."]
    const min = [0,15,30,45]
    const apptData = []

    for (let i = 0; i < apptNbr; i++) {
        const petId = Math.floor(Math.random() * pets + 1)
        const day = Math.floor(Math.random() * days)
        const hour = Math.random() * (18 - 8) + 8 + offset
        const endhour = hour + 1
        const titleIndex = Math.floor(Math.random() * titles.length)
        const noteIndex = Math.floor(Math.random() * notes.length)
        const minIndex = Math.floor(Math.random() * min.length)
        const tempObj = {
            title: titles[titleIndex],
            startDate: new Date(year, month, day, hour, min[minIndex]),
            endDate: new Date(year, month, day, endhour, min[minIndex]),
            notes: notes[noteIndex],
            AnimalId: petId
        }
        apptData.push(tempObj)
    }
    return apptData
}

const seedAppts = () => Appt.bulkCreate(buildAppts())

module.exports = seedAppts