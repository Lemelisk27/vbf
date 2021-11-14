const User = require("./User")
const Role = require("./Role")

User.belongsTo(Role)

Role.hasOne(User)

module.exports={
    User,
    Role
}