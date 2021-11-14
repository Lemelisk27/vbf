const {Animal} = require("../models")

const animalData = [
    {
        id: 1,
        name: "Jody",
        birthdate: "2007-01-13",
        ClientId: 1,
        SpeciesId: 1,
        BreedId: 17
    },
    {
        id: 2,
        name: "Portia",
        birthdate: "2021-09-23",
        ClientId: 2,
        SpeciesId: 1,
        BreedId: 16
    },
    {
        id: 3,
        name: "Dani",
        birthdate: "2007-02-02",
        ClientId: 3,
        SpeciesId: 4,
        BreedId: 47
    },
    {
        id: 4,
        name: "Fetch",
        birthdate: "2020-12-27",
        ClientId: 4,
        SpeciesId: 2,
        BreedId: 26
    },
    {
        id: 5,
        name: "Gleen",
        birthdate: "2007-06-01",
        ClientId: 4,
        SpeciesId: 4,
        BreedId: 49
    },
    {
        id: 6,
        name: "Una",
        birthdate: "2012-04-13",
        ClientId: 5,
        SpeciesId: 1,
        BreedId: 14
    },
    {
        id: 7,
        name: "Hobbit",
        birthdate: "2008-04-14",
        ClientId: 5,
        SpeciesId: 2,
        BreedId: 29
    },
    {
        id: 8,
        name: "Venus",
        birthdate: "2012-11-25",
        ClientId: 6,
        SpeciesId: 3,
        BreedId: 46
    },
    {
        id: 9,
        name: "Lady",
        birthdate: "2017-06-08",
        ClientId: 6,
        SpeciesId: 2,
        BreedId: 37
    },
    {
        id: 10,
        name: "Alsha",
        birthdate: "2010-01-31",
        ClientId: 7,
        SpeciesId: 1,
        BreedId: 4
    },
    {
        id: 11,
        name: "Rory",
        birthdate: "2017-11-05",
        ClientId: 7,
        SpeciesId: 3,
        BreedId: 42
    },
    {
        id: 12,
        name: "Quinty",
        birthdate: "2009-08-13",
        ClientId: 8,
        SpeciesId: 1,
        BreedId: 7
    },
    {
        id: 13,
        name: "Maiyah",
        birthdate: "2006-03-03",
        ClientId: 9,
        SpeciesId: 2,
        BreedId: 39
    },
    {
        id: 14,
        name: "Takota",
        birthdate: "2014-12-25",
        ClientId: 10,
        SpeciesId: 1,
        BreedId: 5
    }
]

const seedAnimals = () => Animal.bulkCreate(animalData)

module.exports = seedAnimals