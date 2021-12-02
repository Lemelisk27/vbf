const express = require('express');
const router = express.Router();
const {Inventory,Inventoryitems,Unit} = require("../../models")
const sequelize = require('../../config/connection')
const tokenAuth = require("../../middleware/tokenAuth")

router.get("/",(req,res)=>{
    if(!req.session.user){
        res.redirect("/")
        return
    }
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

router.get("/items", tokenAuth, (req, res) => {
    Inventoryitems.findAll({
        order: ["item_name"],
        include: [Inventory, Unit]
    })
    .then(invItems=>{
        if(invItems) {
            res.json(invItems)
        }
        else {
            res.status(404).json({Message: "Nothing Found"})
        }
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({Message: "An Error Occured", err:err})
    })
})

router.get("/categories", tokenAuth, (req, res) => {
    Inventory.findAll({
        order: ["category_name"]
    })
    .then(cat=>{
        if (cat) {
            res.json(cat)
        }
        else {
            res.status(404).json({Message: "Nothing Found"})
        }
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({Message: "An Error Occured", err:err})
    })
})

module.exports = router