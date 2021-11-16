const router = require('express').Router()
const userRoutes = require("./user-routes")
const roleRoutes = require("./role-routes")
const clientRoutes = require("./client-routes")
const animalRoutes = require("./animal-routes")
const clinicRoutes = require("./clinic-routes")
const inventoryRoutes = require("./inventory-routes")

router.use("/users",userRoutes)
router.use("/roles",roleRoutes)
router.use("/clients",clientRoutes)
router.use("/animals",animalRoutes)
router.use("/clinics",clinicRoutes)
router.use("/inventory",inventoryRoutes)

module.exports = router