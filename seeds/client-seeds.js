const {Client} = require("../models")

const clientData = [
    {
        id: 1,
        first_name: "Laxman",
        last_name: "McIver",
        street: "1234 McIver Blvd",
        city: "Someplace",
        state: "WA",
        zip: "98045",
        email: "Laxman@McIver.com",
        work: "425-555-1234",
        home: "425-555-1235",
        cell: "425-555-1236",
        alt: "425-555-1237",
        ClinicId: 1
    },
    {
        id: 2,
        first_name: "Sheona",
        last_name: "Monk",
        street: "1234 Sheona ST E",
        city: "Someplace",
        state: "WA",
        zip: "98045",
        email: "Sheona@Monk.com",
        home: "425-555-1235",
        cell: "425-555-1236",
        alt: "425-555-1237",
        ClinicId: 1
    },
    {
        id: 3,
        first_name: "Umukoro",
        last_name: "Northrop",
        street: "1234 Northrop LN",
        city: "Someplace",
        state: "WA",
        zip: "98045",
        email: "Umukoro@Northrop.com",
        cell: "425-555-1236",
        alt: "425-555-1237",
        ClinicId: 1
    },
    {
        id: 4,
        first_name: "Edan",
        last_name: "Howell",
        street: "1234 Edan CT",
        city: "Someplace",
        state: "WA",
        zip: "98045",
        email: "Edan@Howell.com",
        home: "425-555-1235",
        alt: "425-555-1237",
        ClinicId: 1
    },
    {
        id: 5,
        first_name: "Martin",
        last_name: "Petersson",
        street: "1234 Martin Blvd",
        city: "Someplace",
        state: "WA",
        zip: "98045",
        email: "Martin@Petersson.com",
        work: "425-555-1234",
        cell: "425-555-1236",
        alt: "425-555-1237",
        ClinicId: 1
    },
    {
        id: 6,
        first_name: "Bronimir",
        last_name: "Schuchardt",
        street: "1234 Bronimir CR",
        city: "Someplace",
        state: "WA",
        zip: "98045",
        email: "Bronimir@Schuchardt.com",
        work: "425-555-1234",
        home: "425-555-1235",
        alt: "425-555-1237",
        ClinicId: 1
    },
    {
        id: 7,
        first_name: "Elsie",
        last_name: "Victor",
        street: "1234 Elsie Blvd",
        city: "Someplace",
        state: "WA",
        zip: "98045",
        email: "Elsie@Victor.com",
        work: "425-555-1234",
        home: "425-555-1235",
        cell: "425-555-1236",
        ClinicId: 1
    },
    {
        id: 8,
        first_name: "Africanus",
        last_name: "Broz",
        street: "1234 Africanus ST",
        city: "Someplace",
        state: "WA",
        zip: "98045",
        email: "Africanus@Broz.com",
        work: "425-555-1234",
        home: "425-555-1235",
        alt: "425-555-1237",
        ClinicId: 1
    },
    {
        id: 9,
        first_name: "Milda",
        last_name: "Gottlieb",
        street: "1234 Gottlieb LN",
        city: "Someplace",
        state: "WA",
        zip: "98045",
        email: "Milda@Gottlieb.com",
        work: "425-555-1234",
        cell: "425-555-1236",
        alt: "425-555-1237",
        ClinicId: 1
    },
    {
        id: 10,
        first_name: "Artemidoros",
        last_name: "Karga",
        street: "1234 Artemidoros CR",
        city: "Someplace",
        state: "WA",
        zip: "98045",
        email: "Artemidoros@Karga.com",
        home: "425-555-1235",
        cell: "425-555-1236",
        alt: "425-555-1237",
        ClinicId: 1
    }
]

const seedClients = () => Client.bulkCreate(clientData)

module.exports = seedClients