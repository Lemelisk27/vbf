const express = require('express');
const router = express.Router();
const {Allergy, Allergyjoins} = require("../../models")
const sequelize = require('../../config/connection')
const tokenAuth = require("../../middleware/tokenAuth")

router.get("/",(req,res)=>{
    if(!req.session.user){
        res.redirect("/")
        return
    }
    Allergy.findAll()
    .then(allergyInfo=>{
        if(allergyInfo) {
            res.json(allergyInfo)
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

router.get("/joins",(req,res)=>{
    if(!req.session.user){
        res.redirect("/")
        return
    }
    Allergyjoins.findAll()
    .then(joins=>{
        if(joins) {
            res.json(joins)
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

router.get("/joins/all", tokenAuth, (req, res)=>{
    Allergyjoins.findAll()
    .then(foundAllergy=>{
        if(foundAllergy) {
            res.json(foundAllergy)
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

router.post("/joins", tokenAuth, (req, res)=>{
    Allergyjoins.create({
        AnimalId: req.body.AnimalId,
        AllergyId: req.body.AllergyId
    })
    .then(newJoin=>{
        res.json(newJoin)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({Message: "An Error Occured", err:err})
    })
})

router.get("/all", tokenAuth, (req,res)=>{
    Allergy.findAll({
        order: ["alergy_name"]
    })
    .then(allergyInfo=>{
        if(allergyInfo) {
            res.json(allergyInfo)
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

router.delete("/joins/:id", tokenAuth, (req, res) => {
    Allergyjoins.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(deleted=>{
        res.json(deleted)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({Message: "An Error Occured", err:err})
    })
})

router.post("/", tokenAuth, (req, res) => {
    Allergy.create({
        alergy_name: req.body.alergy_name
    })
    .then(newAllergy=>{
        res.json(newAllergy)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({Message: "An Error Occured", err:err})
    })
})

router.put("/", tokenAuth, (req, res) => {
    Allergy.update({
        alergy_name: req.body.alergy_name
    },
    {
        where: {
            id: req.body.id
        }
    })
    .then(updatedAllergy=>{
        res.json(updatedAllergy)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({Message: "An Error Occured", err:err})
    })
})

router.delete("/:id", tokenAuth, (req, res) => {
    Allergy.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(deletedAllergy=>{
        res.json(deletedAllergy)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({Message: "An Error Occured", err:err})
    })
})

module.exports = router