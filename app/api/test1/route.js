/*import { connectDB } from "@/app/library/config/db"
const { NextResponse } = require("next/server")
import OrderModel from "../../library/models/OrderModel.js";

const loadDB = async() =>{
    await connectDB();

}
loadDB();

export async function GET(request){
  const items = await OrderModel.find({})
  return NextResponse.json({items})
}

export async function POST(request){
    try {
   
    
        const body = await request.json(); 
        const newOrder = new OrderModel(body); 
    
        await newOrder.save(); 
    
        return new Response(JSON.stringify({ success: true, order: newOrder }));
      } catch (error) {
        return new Response(
          JSON.stringify({ success: false, error: error.message })
        )}
}*/