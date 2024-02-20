const mongoose= require("mongoose");

const userSchema=new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        lowercase:true
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
    },
    password:{
        type:String,
        required:true
    },
    mobileNo:{
        type:Number,
        required:true
    }
},{timestamps:true})

export const User = mongoose.model('User','userSchema')