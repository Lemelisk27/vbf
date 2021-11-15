const {User} = require("../models")

const userData = [
    {
        id: 1,
        first_name: "Claudia",
        last_name: "Fuller",
        username: "cfuller",
        password: "password",
        admin: true,
        RoleId: 1,
        ClinicId: 1
    },
    {
        id: 2,
        first_name: "Tue",
        last_name: "Pohl",
        username: "tpohl",
        password: "password",
        RoleId: 2,
        ClinicId: 1
    },
    {
        id: 3,
        first_name: "Aberash",
        last_name: "Janssens",
        username: "ajanssens",
        password: "password",
        RoleId: 2,
        ClinicId: 1
    },
    {
        id: 4,
        first_name: "Themba",
        last_name: "Trucco",
        username: "ttrucco",
        password: "password",
        RoleId: 2,
        ClinicId: 1
    },
    {
        id: 5,
        first_name: "Hana",
        last_name: "Marston",
        username: "hmarston",
        password: "password",
        RoleId: 3,
        ClinicId: 1
    }
]

const seedUsers = () => User.bulkCreate(userData,{individualHooks:true})

module.exports = seedUsers