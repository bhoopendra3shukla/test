const mongoose=require("mongoose");

const medicalRecordSchema=new mongoose.Schema({
  name:{
   type:mongoose.model.ObjectId,
   ref:"Patient"
  },
  attendBy:{
    type:mongoose.Schema.ObjectId,
    ref:"Doctor"
  }
},{timestamps:true});

export const medicalRecord = mongoose.model("medicalRecord",medicalRecordSchema)