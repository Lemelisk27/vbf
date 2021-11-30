const express = require('express');
const router = express.Router();
const {Animal,Species,Breed,Allergy,Client,Appt} = require("../../models")
const sequelize = require('../../config/connection')
const tokenAuth = require("../../middleware/tokenAuth")
const { Op } = require("sequelize")

router.get("/",(req,res)=>{
    if(!req.session.user){
        res.redirect("/")
        return
    }
    Animal.findAll({
        include:[{
            model: Species
        },
        {
            model: Breed
        },
        {
            model: Allergy
        },
        {
            model: Appt,
            as: "prevAppt",
            where: {
                startDate: {
                    [Op.lt]: new Date()
                }
            },
            attributes: [[sequelize.fn('date_format', sequelize.col('startDate'), '%m-%d-%Y'), 'lastAppt']],
            order: [["startDate", "DESC"]],
            limit: 1
        },
        {
            model: Appt,
            where: {
                startDate: {
                    [Op.gt]: new Date()
                }
            },
            attributes: [[sequelize.fn('date_format', sequelize.col('startDate'), '%m-%d-%Y'), 'nextAppt']],
            order: [["startDate", "ASC"]],
            limit: 1
        }]
    })
    .then(animalData=>{
        res.json(animalData)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json(err)
    })
})

router.get("/species", tokenAuth, (req, res) => {
    Species.findAll({
        order: ["name"]
    })
    .then(speciesData=>{
        if(speciesData) {
            res.json(speciesData)
        }
        else {
            res.status(404).json({Message: "No Species Found"})
        }
    })
    .catch(err=>{
        console.log(err),
        res.status(500).json({Message: "An Error Occured", err:err})
    })
})

router.get("/breeds", tokenAuth, (req, res) => {
    Breed.findAll({
        order: ["name"],
        attributes: ["id", "name"],
        include: [{
            model: Species,
            attributes: ["id", ["name", "species"]]
        }]
    })
    .then(breedData=>{
        if(breedData) {
            res.json(breedData)
        }
        else {
            res.status(404).json({Message: "No Breeds Found"})
        }
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({Message:"An Error Occured", err:err})
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
        },
        {
            model: Appt,
            as: "prevAppt",
            where: {
                startDate: {
                    [Op.lt]: new Date()
                }
            },
            attributes: [[sequelize.fn('date_format', sequelize.col('startDate'), '%m-%d-%Y'), 'lastAppt']],
            order: [["startDate", "DESC"]],
            limit: 1
        },
        {
            model: Appt,
            where: {
                startDate: {
                    [Op.gt]: new Date()
                }
            },
            attributes: [[sequelize.fn('date_format', sequelize.col('startDate'), '%m-%d-%Y'), 'nextAppt']],
            order: [["startDate", "ASC"]],
            limit: 1
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

router.post("/", tokenAuth, (req, res) => {
    Animal.create({
        name: req.body.name,
        birthdate: req.body.birthdate,
        color: req.body.color,
        gender: req.body.gender,
        marks: req.body.marks,
        description: req.body.description,
        ClientId: req.body.ClientId,
        SpeciesId: req.body.SpeciesId,
        BreedId: req.body.BreedId,
        ClinicId: 1
    })
    .then(newAnimal => {
        res.json(newAnimal)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({Message: "An Error Occured", err:err})
    })
})

router.get("/:id", tokenAuth, (req, res) => {
    Animal.findOne({
        where: {
            id: req.params.id
        },
        attributes: ["name", [sequelize.fn('date_format', sequelize.col('birthdate'), '%m-%d-%Y'), 'birthdate'], "color", "gender", "marks", "description", "img", "warn"],
        include: [{
            model: Allergy,
            attributes: ["id", "alergy_name"]
        },
        {
            model: Species,
            attributes: [["name", "species"]]
        },
        {
            model: Breed,
            attributes: [["name", "breed"]]
        }]
    })
    .then(animal=>{
        res.json(animal)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({Message: "An Error Occured", err:err})
    })
})

module.exports = router