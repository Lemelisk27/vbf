const express = require('express');
const router = express.Router();
const {User,Role,Clinic} = require("../../models")
const sequelize = require('../../config/connection')
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const tokenAuth = require("../../middleware/tokenAuth")

router.get("/",(req,res)=>{
    if(!req.session.user){
        res.redirect("/")
        return
    }
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

router.get("/all", tokenAuth, (req, res) => {
    User.findAll()
    .then(userData=>{
        if (userData) {
            res.json(userData)
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

router.post("/login", (req,res) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    })
    .then(foundUser =>{
        if(!foundUser) {
            res.status(401).json({Message:"Incorrect Username or Password"})
        }
        else if(bcrypt.compareSync(req.body.password,foundUser.password)) {
            const token = jwt.sign({
                username:foundUser.username,
                id:foundUser.id
            },
            process.env.JWT_SECRET
            ,{
                expiresIn:"2h"
            })
            res.json({
                token:token,
                user:foundUser
            })
        }
        else {
            res.status(401).json({Message: "Incorrect Username or Password"})
        }
    })
    .catch(err =>{
        console.log(err)
        res.status(500).json({Message: "An Error Occured", err:err})
    })
})

router.get("/:id", tokenAuth, (req, res)=>{
    User.findOne({
        where: {
            id: req.params.id
        },
        include: [Role],
        attributes: {
            exclude: ["password"]
        }
    })
    .then(foundUser=>{
        if (foundUser) {
            res.json(foundUser)
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

router.put("/", tokenAuth, (req, res)=>{
    User.update({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        street: req.body.street,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        email: req.body.email,
        phone: req.body.phone
    },
    {
        where: {
            id: req.body.id
        }
    })
    .then(updatedUser=>{
        res.json(updatedUser)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({Message: "An Error Occured", err:err})
    })
})

router.post("/change", tokenAuth, (req, res)=>{
    let updatedPassword = ""
    updatedPassword = bcrypt.hashSync(req.body.newPassword,10)
    User.findOne({
        where: {
            id: req.body.id
        }
    })
    .then(foundUser=>{
        if (bcrypt.compareSync(req.body.password,foundUser.password)) {
            User.update({
                password: updatedPassword
            },
            {
                where: {
                    id: req.body.id
                }
            })
            .then(updatedPwd=>{
                res.json(updatedPwd)
            })
            .catch(err=>{
                console.log(err)
                res.status(500).json({Message: "An Error Occured", err:err})
            })
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

router.post("/", tokenAuth, (req, res)=>{
    let updatedPassword = ""
    updatedPassword = bcrypt.hashSync(req.body.password,10)
    User.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        street: req.body.street,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        email: req.body.email,
        phone: req.body.phone,
        admin: req.body.admin,
        password: updatedPassword,
        username: req.body.username,
        ClinicId: req.body.ClinicId,
        RoleId: req.body.RoleId
    })
    .then(newUser=>{
        res.json(newUser)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({Message: "An Error Occurered", err:err})
    })
})

module.exports = router