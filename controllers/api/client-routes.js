const express = require('express');
const router = express.Router();
const {Client,Animal,Clinic} = require("../../models")
const sequelize = require('../../config/connection')

router.get("/",(req,res)=>{
    Client.findAll({
        include:[Animal,Clinic]
    })
    .then(clientData=>{
        res.json(clientData)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json(err)
    })
})

module.exports = router