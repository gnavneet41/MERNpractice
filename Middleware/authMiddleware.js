const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const security = process.env.SECURITY;

const authMiddleware = async (req,res,next) =>{
    const authHeader = req.headers.authorization;
    if(!authHeader){
        return res.status(401).json({"message" : "Authorization header missing"});
    }
    const token = authHeader.split(' ')[1];
    try{
        const decoded = jwt.verify(token,security);
        req.user = decoded;
        next();
    }catch(err){
        return res.status(401).json({"message" : "Invalid or expired token"});
    }
}

module.exports = {authMiddleware};