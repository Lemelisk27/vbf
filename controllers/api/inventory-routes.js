const express = require('express');
const router = express.Router();
const {Inventory,Inventoryitems,Unit,Inventoryjoin} = require("../../models")
const sequelize = require('../../config/connection')
const tokenAuth = require("../../middleware/tokenAuth");
const e = require('express');

router.get("/",(req,res)=>{
    if(!req.session.user){
        res.redirect("/")
        return
    }
    Inventory.findAll({
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

router.put("/items/qty", tokenAuth, (req, res) => {
    Inventoryitems.update({
        qty: req.body.qty
    },
    {
        where: {
            id: req.body.id
        }
    })
    .then(updatedItem=>{
        res.json(updatedItem)
    })
    .catch(err=>{
        console.log(err)
    })
})

router.put("/items/category", tokenAuth, (req, res) => {
    Inventoryjoin.update({
        InventoryId: req.body.newId
    },
    {
        where: {
            InventoryId: req.body.id
        }
    })
    .then(updatedItems=>{
        res.json(updatedItems)
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

router.post("/categories", tokenAuth, (req, res) => {
    Inventory.create({
        category_name: req.body.category_name,
        ClinicId: req.body.ClinicId
    })
    .then(newCategory=>{
        res.json(newCategory)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({Message: "An Error Occured", err:err})
    })
})

router.put("/categories", tokenAuth, (req, res) => {
    Inventory.update({
        category_name: req.body.category_name
    },
    {
        where: {
            id: req.body.id
        }
    })
    .then(updatedCategory=>{
        res.json(updatedCategory)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({Message: "An Error Occured", err:err})
    })
})

router.delete("/categories/:id", tokenAuth, (req, res) => {
    Inventory.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(deletedCategory=>{
        res.json(deletedCategory)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({Message: "An Error Occured", err:err})
    })
})

router.get("/units", tokenAuth, (req, res) => {
    Unit.findAll({
        order: ["unit_name"]
    })
    .then(foundUnit=>{
        if (foundUnit) {
            res.json(foundUnit)
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

router.post("/items", tokenAuth, (req, res) => {
    Inventoryitems.create({
        item_name: req.body.item_name,
        cost: req.body.cost,
        qty: req.body.qty,
        UnitId: req.body.UnitId
    })
    .then(createdItem=>{
        res.json(createdItem)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({Message: "An Error Occured", err:err})
    })
})

router.post("/joins", tokenAuth, (req, res) => {
    Inventoryjoin.create({
        InventoryId: req.body.InventoryId,
        InventoryitemsId: req.body.InventoryitemsId
    })
    .then(createdJoin=>{
        res.json(createdJoin)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({Message: "An Error Occured", err:err})
    })
})

router.get("/joins", tokenAuth, (req, res) => {
    Inventoryjoin.findAll()
    .then(foundJoins=>{
        if(foundJoins) {
            res.json(foundJoins)
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

router.put("/joins", tokenAuth, (req, res) => {
    Inventoryjoin.update({
        InventoryId: req.body.InventoryId,
        InventoryitemsId: req.body.InventoryitemsId
    },
    {
        where: {
            id: req.body.id
        }
    })
    .then(updatedJoin=>{
        res.json(updatedJoin)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({Message: "An Error Occured", err:err})
    })
})

router.put("/items", tokenAuth, (req, res) => {
    Inventoryitems.update({
        item_name: req.body.item_name,
        cost: req.body.cost,
        qty: req.body.qty,
        UnitId: req.body.UnitId
    },
    {
        where: {
            id: req.body.id
        }
    })
    .then(updatedItem=>{
        res.json(updatedItem)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({Message: "An Error Occured", err:err})
    })
})

router.delete("/items/:id", tokenAuth, (req, res) => {
    Inventoryitems.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(deletedItem=>{
        res.json(deletedItem)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({Message: "An Error Occured", err:err})
    })
})

module.exports = router