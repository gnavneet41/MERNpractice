const users = require('../Models/userModel');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const security = process.env.SECURITY;

const su = async (req,res)=>{
    const {name,email,phone,password} = req.body;
    if(!name || !email || !phone || !password){
        return res.status(400).json({"message" : "All fields are Required"});
    }
    try{
        await users.create({name,email,phone,password});   
        return res.status(201).json({"message" :  "User created successfully!!!"});
    }catch(err){
        return res.status(500).json({"error" : err});
    }
}

const login = async (req,res)=>{
    const {mail,password} = req.body;
    if(!mail || !password){
        return res.status(400).json({"message" : "All Fields are Required"});
    }
    try{
        const user = await users.findOne({email : mail});
        if(!user){
            return res.status(404).json({"message" : "user not found"});
        }
        if(password !== user.password){
            return res.status(401).json({"message" : "Invalid Credentials"});
        }
        const token = jwt.sign({id:user._id,name:user.name},security,{expiresIn : "1h"});
        return res.status(200).json({"message" : "Login Successfull !!!","token" : token});
    }catch(err){
        return res.status(500).json({"error" : err});
    }

}

module.exports = {su,login};