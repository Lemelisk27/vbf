const {Apiuser} = require("../models")

const apiUserData = [
    {
        id: 1,
        username: "Lemelisk27",
        password: "password"
    },
    {
        id: 2,
        username: "cadmin",
        password: "password"
    }
]

const seedApiUsers = () => Apiuser.bulkCreate(apiUserData,{individualHooks:true})

module.exports = seedApiUsers