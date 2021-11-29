const express = require('express');
const router = express.Router();
const {Role} = require("../../models")
const sequelize = require('../../config/connection')

router.get("/",(req,res)=>{
    if(!req.session.user){
        res.redirect("/")
        return
    }
    Role.findAll()
    .then(roleData=>{
        res.json(roleData)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json(err)
    })
})

module.exports = router