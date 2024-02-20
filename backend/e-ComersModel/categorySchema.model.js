const mongoose=require("mongoose");

const categorySchema=new mongoose.model({
    name:{
        type:String,
        required:true
    }
},{timestamp:true})

export const Category=mongoose.model("Category",categorySchema)