const express = require('express');
const router = express.Router();
const path = require('path');

router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, "../public/login.html"))
})

router.get("/home",(req,res)=>{
    if(!req.session.user){
        res.redirect("/")
        return
    }
    res.sendFile(path.join(__dirname, "../public/index.html"))
})

module.exports = router