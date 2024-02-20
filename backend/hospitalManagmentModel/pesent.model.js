const mongoose =require("mongoose");

const patientSchema=new mongoose.Schema({
    patientName:{
        type:String,
        required:true
    },
    patientAge:{
        type:String,
        required:true
    },
    patientAddress:{
        type:Number,
        required:true
    },
    patientAddress:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        enum:["M","F","O"],
        required:true
    },


},{timestamps:true})


export const Patient=mongoose.model("Patient",patientSchema)