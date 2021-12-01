const express = require('express');
const router = express.Router();
const {Clinic} = require("../../models")
const sequelize = require('../../config/connection')
const tokenAuth = require("../../middleware/tokenAuth")

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

router.get("/all", tokenAuth, (req, res) => {
    Clinic.findAll()
    .then(allClinics=>{
        if(allClinics) {
            res.json(allClinics)
        }
        else {
            res.status(404).json({Message: "None Found"})
        }
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({Message: "An Error Occured", err:err})
    })
})

module.exports = router