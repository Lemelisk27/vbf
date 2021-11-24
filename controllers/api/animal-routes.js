const express = require('express');
const router = express.Router();
const {Animal,Species,Breed,Allergy,Client} = require("../../models")
const sequelize = require('../../config/connection')
const tokenAuth = require("../../middleware/tokenAuth")

router.get("/",(req,res)=>{
    Animal.findAll({
        include:[Species,Breed,Allergy]
    })
    .then(animalData=>{
        res.json(animalData)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json(err)
    })
})

router.get("/all", tokenAuth, (req, res) => {
    Animal.findAll({
        order: ["name"],
        attributes: ["id", "name"],
        include: [{
            model: Species,
            attributes: [["name", "species"]]
        },
        {
            model: Breed,
            attributes: [["name", "breed"]]
        },
        {
            model: Client,
            attributes: [[sequelize.fn("concat", sequelize.col('first_name'), " ", sequelize.col('last_name')), "client"], "phone"]
        }]
    })
    .then(animals=>{
        if(animals) {
            res.json(animals)
        }
        else {
            res.status(404).json({Message: "No Animals Found"})
        }
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({Message: "An Error Occured", err:err})
    })
})

module.exports = router