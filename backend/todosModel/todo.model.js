const mongoose=require("mongoose");

const todoSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true,
    },
    complete:{
        type:Boolean,
        default:false
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    subTodos:[
        {
         type:mongoose.Schema.Types.ObjectId,
         ref:SubTodo
        }
    ]//array of sub-Todos
    
},{
    timestamps:true
})

export const todo = mongoose.model("todo", todoSchema);