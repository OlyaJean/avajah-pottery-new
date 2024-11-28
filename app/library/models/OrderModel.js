import mongoose from "mongoose";

const Schema = new mongoose.Schema({
   
    description:{
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
    }
   
})

const CartModel = mongoose.models.cart || mongoose.model('cart',Schema)

//Using || operator so if cart database is available , it will use it first, otherwise it will create a new db every time

export default CartModel