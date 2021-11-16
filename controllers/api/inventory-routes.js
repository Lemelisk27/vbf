const express = require('express');
const router = express.Router();
const {Inventory,Inventoryitems,Unit} = require("../../models")
const sequelize = require('../../config/connection')

router.get("/",(req,res)=>{
    Inventory.findAll({
        attributes: {
            exclude: ["id","ClinicId"]
        },
        include: [{model: Inventoryitems,
            include: [Unit]
        }]
    })
    .then(inventoryData=>{
        res.json(inventoryData)
    })
    .catch(err=>{
        res.status(500).json(err)
    })
})

module.exports = router