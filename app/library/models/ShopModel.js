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
 
    story:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    img:{
        type:String,
        required:true
    },
   
})

const ShopModel = mongoose.models.shop || mongoose.model('shop',Schema)

//Using || operator so if shop database is available , it will use it first, otherwise it will create a new db every time

export default ShopModel