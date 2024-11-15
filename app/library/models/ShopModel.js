import mongoose from "mongoose";

const Schema = new mongoose.Schema({
   
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    story:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
})

const 