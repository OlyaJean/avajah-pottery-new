import { connectDB } from "@/app/library/config/db"
const { NextResponse } = require("next/server")
import OrderModel from "../../library/models/OrderModel.js";

const loadDB = async() =>{
    await connectDB();

}
loadDB();



export async function POST(request){
    try {
   
    
        const body = await request.json(); // Parse the JSON body
        const newOrder = new OrderModel(body); // Create a new Order document
    
        await newOrder.save(); // Save the order to the database
    
        return new Response(JSON.stringify({ success: true, order: newOrder }));
      } catch (error) {
        return new Response(
          JSON.stringify({ success: false, error: error.message })
        )}
}