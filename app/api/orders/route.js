import { connectDB } from "@/app/library/config/db"
const { NextResponse } = require("next/server")
import OrderModel from "../../library/models/OrderModel.js";

const loadDB = async() =>{
    await connectDB();

}
loadDB();



export async function POST(){
    const newOrder = new OrderModel();
    await newOrder.save();
    return NextResponse.json(newOrder)
}