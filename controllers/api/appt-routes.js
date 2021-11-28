const express = require('express');
const router = express.Router();
const {Appt, Animal} = require("../../models")

router.get("/",(req,res)=>{
    Appt.findAll({
        include:[Animal] 
    })
    .then(apptData=>{
        res.json(apptData)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json(err)
    })
})

module.exports = router