const router = require('express').Router()
const userRoutes = require("./user-routes")
const roleRoutes = require("./role-routes")
const clientRoutes = require("./client-routes")

router.use("/users",userRoutes)
router.use("/roles",roleRoutes)
router.use("/clients",clientRoutes)

module.exports = router