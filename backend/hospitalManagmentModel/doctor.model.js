const mongoose =require("mongoose");

const doctorSchema= new mongoose.Schema({
    doctorName:{
        type:String,
        required:true,
    },
    doctorSpecilization:{
        type:String,
        required:true,
    }
},{timestamps:true})
export const Doctor= mongoose.model("Doctor",doctorSchema)