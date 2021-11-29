const express = require('express');
const router = express.Router();
const {Appt, Animal} = require("../../models")
const tokenAuth = require("../../middleware/tokenAuth")

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

router.get("/all", tokenAuth, (req, res) => {
    Appt.findAll()
    .then(apptData=>{
        if(apptData) {
            res.json(apptData)
        }
        else {
            res.status(404).json({Message: "No Appointments Found"})
        }
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json(err)
    })
})

router.delete("/:id", tokenAuth, (req, res) => {
    Appt.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(delAppt => {
        res.json(delAppt)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({Message: "An Error Occured", err:err})
    })
})

module.exports = router