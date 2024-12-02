import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  customer: {
    name: String,
    address: String,
    email: String,
  },
  items: [
    {
      _id: String,
      name: String,
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