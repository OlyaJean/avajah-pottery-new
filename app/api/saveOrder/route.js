import {connectDB} from "./../../library/config/db";
import OrderModel from "./../../library/models/OrderModel";
const { NextResponse } = require("next/server")


export async function GET(request){
  const items = await OrderModel.find({})
  return NextResponse.json({items})
}


export async function POST(request) {
 

  try {
    await connectDB();  // Ensure DB connection is successful
    console.log('Connected to the database');

    
      const  {customerInfo, cartItems} = await request.json();
    

      console.log('Saving order with data:', { customerInfo, cartItems});

      // Save order in the database
      const order = new OrderModel({
        customerInfo: customerInfo,
        cartItems: cartItems,
       
        status: 'completed',  // or whatever status you want
      });

      await order.save();

      console.log('Order saved:', order);

      return NextResponse.json({ message: 'Order saved successfully' });
   
    
  } catch (error) {
    console.error('Error during order saving:', error);
    return NextResponse.json({ message: 'Internal Server Error' });
  }
}