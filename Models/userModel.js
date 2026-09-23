const mongoose = require('mongoose');

const usrSchema = new mongoose.Schema({
    name:{
        type:String,Required:true
    },
    email:{
        type:String,Required:true
    },
    phone:{
        type:Number,Required:true
    },
    password:{
        type:String,Required:true
    }
});

const users = mongoose.model("User",usrSchema);

module.exports = users;