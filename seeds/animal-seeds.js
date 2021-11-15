const {Animal} = require("../models")

const animalData = [
    {
        id: 1,
        name: "Jody",
        birthdate: "2007-01-13",
        ClientId: 1,
        SpeciesId: 1,
        BreedId: 17,
        color: "Tan and White",
        gender: "Spayed Female",
        marks: "Brown heart on left shoulder",
        description: "Good Doggie",
        img: "https://res.cloudinary.com/coder-mingle/image/upload/v1637018311/portfolio/Spinone-3-5-2_tntb4w.jpg"
    },
    {
        id: 2,
        name: "Portia",
        birthdate: "2021-09-23",
        ClientId: 2,
        SpeciesId: 1,
        BreedId: 16,
        color: "Light Grey",
        gender: "Male",
        description: "Good Doggie",
        img: "https://res.cloudinary.com/coder-mingle/image/upload/v1637018526/portfolio/Skye-Terrier-1-645mk062811_cgsuvf.jpg"
    },
    {
        id: 3,
        name: "Dani",
        birthdate: "2007-02-02",
        ClientId: 3,
        SpeciesId: 4,
        BreedId: 47,
        color: "Green",
        gender: "Female",
        marks: "Red chin",
        description: "Good Lizzard",
        img: "https://res.cloudinary.com/coder-mingle/image/upload/v1637018646/portfolio/3818630739_60c3697540_o_nyadb3.jpg"
    },
    {
        id: 4,
        name: "Fetch",
        birthdate: "2020-12-27",
        ClientId: 4,
        SpeciesId: 2,
        BreedId: 26,
        color: "Orange",
        gender: "Nutered Male",
        description: "Here Kitty Kitty",
        img: "https://res.cloudinary.com/coder-mingle/image/upload/v1637018763/portfolio/european-burmese-cats-kittens-1_jubdua.png"
    },
    {
        id: 5,
        name: "Gleen",
        birthdate: "2007-06-01",
        ClientId: 4,
        SpeciesId: 4,
        BreedId: 49,
        color: "Yellow",
        gender: "Female",
        marks: "Black spots on head",
        description: "Good Lizzard",
        img: "https://res.cloudinary.com/coder-mingle/image/upload/v1637018857/portfolio/leopard-geckos-1236911-01-20aac80501f241f593afcaa7c835de33_usjpaz.jpg"
    },
    {
        id: 6,
        name: "Una",
        birthdate: "2012-04-13",
        ClientId: 5,
        SpeciesId: 1,
        BreedId: 14,
        color: "Black and Tan",
        gender: "Male",
        description: "Good Doggie",
        img: "https://res.cloudinary.com/coder-mingle/image/upload/v1637018936/portfolio/download_owzm6f.jpg"
    },
    {
        id: 7,
        name: "Hobbit",
        birthdate: "2008-04-14",
        ClientId: 5,
        SpeciesId: 2,
        BreedId: 29,
        color: "White with Black Stripes",
        gender: "Spayed Female",
        description: "Here Kitty Kitty",
        img: "https://res.cloudinary.com/coder-mingle/image/upload/v1637019033/portfolio/55dba946b453e2e33090372b32139cff_vrnc6k.jpg"
    },
    {
        id: 8,
        name: "Venus",
        birthdate: "2012-11-25",
        ClientId: 6,
        SpeciesId: 3,
        BreedId: 46,
        color: "Blue",
        gender: "Male",
        marks: "Darker Blue Flight Feathers",
        description: "I Taut I Taw a Puddy-Tat",
        img: "https://res.cloudinary.com/coder-mingle/image/upload/v1637019140/portfolio/pacific_parrotlet_l_wcuk9j.jpg"
    },
    {
        id: 9,
        name: "Lady",
        birthdate: "2017-06-08",
        ClientId: 6,
        SpeciesId: 2,
        BreedId: 37,
        color: "White and Brown",
        gender: "Nutered Male",
        marks: "Blue Eyes",
        description: "Here Kitty Kitty",
        img: "https://res.cloudinary.com/coder-mingle/image/upload/v1637019297/portfolio/Snowshoe-cat_oegw2c.jpg"
    },
    {
        id: 10,
        name: "Alsha",
        birthdate: "2010-01-31",
        ClientId: 7,
        SpeciesId: 1,
        BreedId: 4,
        color: "White",
        gender: "Male",
        description: "Good Doggie",
        img: "https://res.cloudinary.com/coder-mingle/image/upload/v1637019406/portfolio/download_1_lgk0dh.jpg"
    },
    {
        id: 11,
        name: "Rory",
        birthdate: "2017-11-05",
        ClientId: 7,
        SpeciesId: 3,
        BreedId: 42,
        color: "Grey",
        gender: "Female",
        marks: "Orange Cheeks",
        description: "I Taut I Taw a Puddy-Tat",
        img: "https://res.cloudinary.com/coder-mingle/image/upload/v1637019530/portfolio/Some-female-cockatiels-are-full-of-spunk-and-sass_tsipj2.jpg"
    },
    {
        id: 12,
        name: "Quinty",
        birthdate: "2009-08-13",
        ClientId: 8,
        SpeciesId: 1,
        BreedId: 7,
        color: "Redish Brown",
        gender: "Spayed Female",
        description: "Good Doggie",
        img: "https://res.cloudinary.com/coder-mingle/image/upload/v1637019616/portfolio/download_2_hkckzj.jpg"
    },
    {
        id: 13,
        name: "Maiyah",
        birthdate: "2006-03-03",
        ClientId: 9,
        SpeciesId: 2,
        BreedId: 39,
        color: "White with Orange Tail",
        gender: "Female",
        marks: "Orange Eyes",
        description: "Here Kitty Kitty",
        img: "https://res.cloudinary.com/coder-mingle/image/upload/v1637019691/portfolio/turkish-van-cat-lying-on-bed_nw25fp.webp"
    },
    {
        id: 14,
        name: "Takota",
        birthdate: "2014-12-25",
        ClientId: 10,
        SpeciesId: 1,
        BreedId: 5,
        color: "Black and Tan",
        gender: "Male",
        description: "Good Doggie",
        img: "https://res.cloudinary.com/coder-mingle/image/upload/v1637019776/portfolio/70_bm9zhj.jpg"
    }
]

const seedAnimals = () => Animal.bulkCreate(animalData)

module.exports = seedAnimals