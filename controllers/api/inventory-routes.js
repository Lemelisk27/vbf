const express = require('express');
const router = express.Router();
const {Inventory} = require("../../models")
const sequelize = require('../../config/connection')

router.get("/",(req,res)=>{
    Inventory.findAll({
        attributes: {
            exclude: ["id","ClinicId"]
        }
    })
    .then(inventoryData=>{
        res.json(inventoryData)
    })
    .catch(err=>{
        res.status(500).json(err)
    })
})

module.exports = router