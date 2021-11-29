const express = require('express');
const router = express.Router();
const {Apiuser} = require("../../models")
const sequelize = require('../../config/connection')
const bcrypt = require("bcrypt")

router.post("/login", (req,res) => {
    Apiuser.findOne({
        where: {
            username: req.body.username
        }
    })
    .then(foundUser=>{
        if(!foundUser) {
            res.status(401).json({Message:"Incorrect Username or Password"})
        }
        else if(bcrypt.compareSync(req.body.password,foundUser.password)) {
            req.session.user = {
                username:foundUser.username,
                id:foundUser.id
            }
            res.json(foundUser)
        }
        else {
            res.status(401).json({Message: "Incorrect Username or Password"})
        }
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({Message: "An Error Occured", err:err})
    })
})

router.get("/logout",(req,res)=>{
    req.session.destroy()
    res.redirect("/")
})

module.exports = router