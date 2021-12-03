const {User} = require("../models")

const userData = [
    {
        id: 1,
        first_name: "Claudia",
        last_name: "Fuller",
        username: "cfuller",
        password: "password",
        admin: true,
        street: "1234 Claudia LN",
        city: "Someplace",
        state: "WA",
        zip: 98045,
        email: "Claudia@Fuller.com",
        phone: "425-555-1234",
        RoleId: 1,
        ClinicId: 1
    },
    {
        id: 2,
        first_name: "Tue",
        last_name: "Pohl",
        username: "tpohl",
        password: "password",
        street: "1234 Tue ST",
        city: "Someplace",
        state: "WA",
        zip: 98045,
        email: "Tue@Pohl.com",
        phone: "425-555-1235",
        RoleId: 2,
        ClinicId: 1
    },
    {
        id: 3,
        first_name: "Aberash",
        last_name: "Janssens",
        username: "ajanssens",
        password: "password",
        street: "1234 Aberash Blvd",
        city: "Someplace",
        state: "WA",
        zip: 98045,
        email: "Aberash@Janssens.com",
        phone: "425-555-1236",
        RoleId: 2,
        ClinicId: 1
    },
    {
        id: 4,
        first_name: "Themba",
        last_name: "Trucco",
        username: "ttrucco",
        password: "password",
        street: "1234 Themba CT",
        city: "Someplace",
        state: "WA",
        zip: 98045,
        email: "Themba@Trucco.com",
        phone: "425-555-1237",
        RoleId: 2,
        ClinicId: 1
    },
    {
        id: 5,
        first_name: "Hana",
        last_name: "Marston",
        username: "hmarston",
        password: "password",
        street: "1234 Hana CR",
        city: "Someplace",
        state: "WA",
        zip: 98045,
        email: "Hana@Marston.com",
        phone: "425-555-1238",
        RoleId: 3,
        ClinicId: 1
    },
    {
        id: 6,
        first_name: "Class",
        last_name: "Admin",
        username: "cadmin",
        password: "password",
        street: "1234 Class ST",
        city: "Someplace",
        state: "WA",
        zip: 98045,
        email: "Class@Admin.com",
        phone: "425-555-1239",
        admin: true,
        RoleId: 1,
        ClinicId: 1
    },
    {
        id: 7,
        first_name: "Class",
        last_name: "User",
        username: "cuser",
        password: "password",
        street: "1234 Class Blvd",
        city: "Someplace",
        state: "WA",
        zip: 98045,
        email: "Class@User.com",
        phone: "425-555-1230",
        RoleId: 3,
        ClinicId: 1
    }
]

const seedUsers = () => User.bulkCreate(userData,{individualHooks:true})

module.exports = seedUsers