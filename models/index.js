const User = require("./User")
const Role = require("./Role")
const Client = require("./Client")

User.belongsTo(Role)

Role.hasOne(User)

module.exports={
    User,
    Role,
    Client
}