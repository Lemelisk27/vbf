const express = require('express');
const router = express.Router();
const {User,Role,Clinic} = require("../../models")
const sequelize = require('../../config/connection')
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

router.get("/",(req,res)=>{
    User.findAll({
        include:[Role, Clinic]
    })
    .then(userData=>{
        res.json(userData)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json(err)
    })
})

module.exports = router