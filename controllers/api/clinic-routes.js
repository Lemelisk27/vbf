const express = require('express');
const router = express.Router();
const {Clinic} = require("../../models")
const sequelize = require('../../config/connection')

router.get("/",(req,res)=>{
    if(!req.session.user){
        res.redirect("/")
        return
    }
    Clinic.findAll()
    .then(clinicData=>{
        res.json(clinicData)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json(err)
    })
})

module.exports = router