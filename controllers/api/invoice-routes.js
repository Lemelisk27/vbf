const express = require('express');
const router = express.Router();
const {Invoice, Invoiceitems} = require("../../models")
const sequelize = require('../../config/connection')
const tokenAuth = require("../../middleware/tokenAuth")

router.get("/", (req, res)=>{
    if(!req.session.user){
        res.redirect("/")
        return
    }
    Invoice.findAll({
        include: [Invoiceitems]
    })
    .then(invoice=>{
        if (invoice) {
            res.json(invoice)
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

router.post("/", tokenAuth, (req, res) => {
    Invoice.create({
        ClientId: req.body.ClientId,
        subtotal: req.body.subtotal,
        tax: req.body.tax,
        total: req.body.total,
        paid: req.body.paid,
        due: req.body.due,
        date: req.body.date,
        full_paid: req.body.full_paid
    })
    .then(createdInvoice=>{
        res.json(createdInvoice)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({Message: "An Error Occured", err:err})
    })
})

router.get("/items", (req, res) => {
    if(!req.session.user){
        res.redirect("/")
        return
    }
    Invoiceitems.findAll()
    .then(items=>{
        if (items) {
            res.json(items)
        }
        else {
            res.status(404).json({Message: "Nothing Found"})
        }
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({Message: "An Error Occureed", err:err})
    })
})

router.post("/items", tokenAuth, (req, res) => {
    Invoiceitems.create({
        InvoiceId: req.body.InvoiceId,
        item_id: req.body.item_id,
        item_name: req.body.item_name,
        item_cost: req.body.item_cost,
        item_qty: req.body.item_qty,
        item_price: req.body.item_price
    })
    .then(createdItems=>{
        res.json(createdItems)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({Message: "An Error Occured", err:err})
    })
})

router.get("/client/:id", tokenAuth, (req, res) => {
    Invoice.findAll({
        where: {
            ClientId: req.params.id
        },
        order: ["date"],
        attributes: {
            include: [[sequelize.fn('date_format', sequelize.col('date'), '%m-%d-%Y'), 'for_date']]
        },
        include: [Invoiceitems]
    })
    .then(foundInvoice=>{
        if(foundInvoice) {
            res.json(foundInvoice)
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

router.get("/:id", tokenAuth, (req, res) => {
    Invoice.findAll({
        where: {
            id: req.params.id
        },
        attributes: {
            include: [[sequelize.fn('date_format', sequelize.col('date'), '%m-%d-%Y'), 'for_date']]
        },
        include: [Invoiceitems]
    })
    .then(foundInvoice=>{
        res.json(foundInvoice)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({Message: "An Error Occured", err:err})
    })
})

module.exports = router