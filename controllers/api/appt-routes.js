const express = require('express');
const router = express.Router();
const {Appt, Animal, Species, Breed} = require("../../models")
const tokenAuth = require("../../middleware/tokenAuth")

router.get("/",(req,res)=>{
    if(!req.session.user){
        res.redirect("/")
        return
    }
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
    Appt.findAll({
        include:[{
            model: Animal,
            attributes: ["id", "name"],
            include: [{
                model: Species,
                attributes: [["name", "species"]]
            },
            {
                model: Breed,
                attributes: [["name", "breed"]]
            }]
        }]
    })
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

router.put("/", tokenAuth, (req, res) => {
    Appt.update({
        title: req.body.title,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        notes: req.body.notes,
        AnimalId: req.body.AnimalId,
        rRule: req.body.rRule,
        allDay: req.body.allDay
    },
    {
        where: {
            id: req.body.id
        }
    })
    .then(updateAppt=>{
        res.json(updateAppt)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({Message: "An Error Occured", err:err})
    })
})

router.post("/", tokenAuth, (req, res) => {
    Appt.create({
        title: req.body.title,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        notes: req.body.notes,
        AnimalId: req.body.AnimalId,
        rRule: req.body.rRule,
        allDay: req.body.allDay
    })
    .then(newAppt=>{
        res.json(newAppt)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({Message: "An Error Occured", err:err})
    })
})

module.exports = router