const express = require('express');
const router = express.Router();
const {Client,Animal,Clinic} = require("../../models")
const sequelize = require('../../config/connection')
const tokenAuth = require("../../middleware/tokenAuth")

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

router.get("/all", tokenAuth, (req, res) => {
    Client.findAll({
        order: ["first_name"],
        attributes: ["id", [sequelize.fn("concat", sequelize.col('first_name'), " ", sequelize.col('last_name')), "full_name"], "phone"],
        include: [{
            model: Animal,
            attributes: ["id", "name"]
        }]
    })
    .then(clients=>{
        if(clients) {
            res.json(clients)
        }
        else {
            res.status(404).json({Message: "No Clients Found"})
        }
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({Message: "An Error Occured", err:err})
    })
})

module.exports = router