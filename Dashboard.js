const express = require('express');
const router = express.Router();
const {authMiddleware} = require('./Middleware/authMiddleware.js');

router.get('/',authMiddleware,(req,res)=>{
    res.json({
        message : "Welcome to Dashboard",
        user : req.user
    })
});

module.exports = {router};