const {Breed} = require("../models")

const breedData = [
    {
        id: 1,
        name: "American Water Spaniel",
        SpeciesId: 1
    },
    {
        id: 2,
        name: "Airedale Terrier",
        SpeciesId: 1
    },
    {
        id: 3,
        name: "Chesapeake Bay Retriever",
        SpeciesId: 1
    },
    {
        id: 4,
        name: "Dogo Argentino",
        SpeciesId: 1
    },
    {
        id: 5,
        name: "Finnish Lapphund",
        SpeciesId: 1
    },
    {
        id: 6,
        name: "Havanese",
        SpeciesId: 1
    },
    {
        id: 7,
        name: "Irish Terrier",
        SpeciesId: 1
    },
    {
        id: 8,
        name: "Italian Greyhound",
        SpeciesId: 1
    },
    {
        id: 9,
        name: "Japanese Chin",
        SpeciesId: 1
    },
    {
        id: 10,
        name: "Keeshond",
        SpeciesId: 1
    },
    {
        id: 11,
        name: "Nova Scotia Duck Tolling",
        SpeciesId: 1
    },
    {
        id: 12,
        name: "Pembroke Welsh Corgi",
        SpeciesId: 1
    },
    {
        id: 13,
        name: "Polish Lowland",
        SpeciesId: 1
    },
    {
        id: 14,
        name: "Rottweiler",
        SpeciesId: 1
    },
    {
        id: 15,
        name: "Shetland Sheepdog",
        SpeciesId: 1
    },
    {
        id: 16,
        name: "Skye Terrier",
        SpeciesId: 1
    },
    {
        id: 17,
        name: "Spinone Italiano",
        SpeciesId: 1
    },
    {
        id: 18,
        name: "West Highland White Terrier",
        SpeciesId: 1
    },
    {
        id: 19,
        name: "Yorkipoo",
        SpeciesId: 1
    },
    {
        id: 20,
        name: "Yorkshire Terrier",
        SpeciesId: 1
    },
    {
        id: 21,
        name: "American Bobtail",
        SpeciesId: 2
    },
    {
        id: 22,
        name: "American Curl",
        SpeciesId: 2
    },
    {
        id: 23,
        name: "American Shorthair",
        SpeciesId: 2
    },
    {
        id: 24,
        name: "Chantilly",
        SpeciesId: 2
    },
    {
        id: 25,
        name: "Colorpoint",
        SpeciesId: 2
    },
    {
        id: 26,
        name: "European Burmese",
        SpeciesId: 2
    },
    {
        id: 27,
        name: "Havana Brown",
        SpeciesId: 2
    },
    {
        id: 28,
        name: "Japanese Bobtail",
        SpeciesId: 2
    },
    {
        id: 29,
        name: "Maine Coon",
        SpeciesId: 2
    },
    {
        id: 30,
        name: "Oriental Shorthair",
        SpeciesId: 2
    },
    {
        id: 31,
        name: "Persian",
        SpeciesId: 2
    },
    {
        id: 32,
        name: "Ragamuffin",
        SpeciesId: 2
    },
    {
        id: 33,
        name: "Ragdoll",
        SpeciesId: 2
    },
    {
        id: 34,
        name: "Scottish Fold",
        SpeciesId: 2
    },
    {
        id: 35,
        name: "Siamese",
        SpeciesId: 2
    },
    {
        id: 36,
        name: "Siberian",
        SpeciesId: 2
    },
    {
        id: 37,
        name: "Snowshoe",
        SpeciesId: 2
    },
    {
        id: 38,
        name: "Somali",
        SpeciesId: 2
    },
    {
        id: 39,
        name: "Turkish Van",
        SpeciesId: 2
    },
    {
        id: 40,
        name: "York Chocolate",
        SpeciesId: 2
    },
    {
        id: 41,
        name: "Budgerigar",
        SpeciesId: 3
    },
    {
        id: 42,
        name: "Cockatiel",
        SpeciesId: 3
    },
    {
        id: 43,
        name: "Cockatoo",
        SpeciesId: 3
    },
    {
        id: 44,
        name: "Hyacinth Macaw",
        SpeciesId: 3
    },
    {
        id: 45,
        name: "Dove",
        SpeciesId: 3
    },
    {
        id: 46,
        name: "Parrotlet",
        SpeciesId: 3
    },
    {
        id: 47,
        name: "Anole",
        SpeciesId: 4
    },
    {
        id: 48,
        name: "Bearded dragon",
        SpeciesId: 4
    },
    {
        id: 49,
        name: "Leopard gecko",
        SpeciesId: 4
    },
    {
        id: 50,
        name: "Water dragon",
        SpeciesId: 4
    }
]

const seedBreeds = () => Breed.bulkCreate(breedData)

module.exports = seedBreeds