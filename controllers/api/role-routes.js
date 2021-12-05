const express = require('express');
const router = express.Router();
const {Role} = require("../../models")
const sequelize = require('../../config/connection');
const tokenAuth = require('../../middleware/tokenAuth');

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


router.get("/all", tokenAuth, (req,res)=>{
    Role.findAll()
    .then(roles=>{
        if (roles) {
            res.json(roles)
        }
        else {
            res.status(404).json({Message: "Nothing Found"})
        }
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({Message: "An Error Occured", err:err})
    })
})

module.exports = router