const {User} = require("../models")

const userData = [
    {
        first_name: "Claudia",
        last_name: "Fuller",
        username: "cfuller",
        password: "password",
        admin: true
    },
    {
        first_name: "Tue",
        last_name: "Pohl",
        username: "tpohl",
        password: "password"
    },
    {
        first_name: "Aberash",
        last_name: "Janssens",
        username: "ajanssens",
        password: "password"
    },
    {
        first_name: "Themba",
        last_name: "Trucco",
        username: "ttrucco",
        password: "password"
    },
    {
        first_name: "Hana",
        last_name: "Marston",
        username: "hmarston",
        password: "password"
    }
]

const seedUsers = () => User.bulkCreate(userData,{individualHooks:true})

module.exports = seedUsers