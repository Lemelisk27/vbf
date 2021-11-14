const router = require('express').Router()
const userRoutes = require("./user-routes")
const roleRoutes = require("./role-routes")
const clientRoutes = require("./client-routes")
const animalRoutes = require("./animal-routes")

router.use("/users",userRoutes)
router.use("/roles",roleRoutes)
router.use("/clients",clientRoutes)
router.use("/animals",animalRoutes)

module.exports = router