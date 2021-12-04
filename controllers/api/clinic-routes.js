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

router.put("/", tokenAuth, (req, res) => {
    Clinic.update({
        name: req.body.name,
        street: req.body.street,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        email: req.body.email,
        img: req.body.img,
        phone: req.body.phone,
        site: req.body.site,
        state: req.body.state,
        tax_rate: req.body.tax_rate
    },
    {
        where: {
            id: req.body.id
        }
    })
    .then(updatedClinic=>{
        res.json(updatedClinic)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({Message: "An Error Occured", err:err})
    })
})

module.exports = router