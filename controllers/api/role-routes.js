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
    Role.findAll({
        order: ["title"]
    })
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

router.post("/", tokenAuth, (req, res) => {
    Role.create({
        title: req.body.title
    })
    .then(newRole=>{
        res.json(newRole)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({Message: "An Error Occured", err:err})
    })
})

router.put("/", tokenAuth, (req, res) => {
    Role.update({
        title: req.body.title
    },
    {
        where: {
            id: req.body.id
        }
    })
    .then(updatedRole=>{
        res.json(updatedRole)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({Message: "An Error Occured", err:err})
    })
})

router.delete("/:id", tokenAuth, (req, res) => {
    Role.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(deletedRole=>{
        res.json(deletedRole)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({Message: "An Error Occured", err:err})
    })
})

module.exports = router