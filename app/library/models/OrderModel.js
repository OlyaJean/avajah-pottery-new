import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  customer: {
    name: String,
    street: String,
    city: String,
    state:String,
    zipcode:String,
    email: String,
  },
  items: [
    {
      _id: String,
      description: String,
      category: String,
      price: Number,
      quantity: Number,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

const OrderModel = mongoose.models.order || mongoose.model('order',Schema)

//Using || operator so if cart database is available , it will use it first, otherwise it will create a new db every time

export default OrderModel