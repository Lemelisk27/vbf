const express = require('express');
const router = express.Router();
const {Animal,Species,Breed} = require("../../models")
const sequelize = require('../../config/connection')

router.get("/",(req,res)=>{
    Animal.findAll({
        include:[Species,Breed]
    })
    .then(animalData=>{
        res.json(animalData)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json(err)
    })
})

module.exports = router