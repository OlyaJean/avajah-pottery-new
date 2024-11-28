import { connectDB } from "@/app/library/config/db"
import {writeFile} from 'fs/promises'
const { NextResponse } = require("next/server")
import { items } from "@/assets/assets.js";
import ShopModel from "../../library/models/ShopModel.js";
const fs = require('fs')

const loadDB = async() =>{
    await connectDB();

}
loadDB();
//we pass request as an argument inside our hhtp request function, which makes this request dynamic. Great for e-commerce where cart changes frequently. Without an argument, the request will be static, which means the request will be cached and re-used. Good for blogs. By default Next js is using static requests
export async function GET(request){
   const itemID = request.nextUrl.searchParams.get('id')
   if(itemID){
    const item = await ShopModel.findById(itemID)  
    return NextResponse.json(item)
   }else{
    const items = await ShopModel.find({})
    return NextResponse.json({items})
   }
 


  
   
}

export async function POST(request){

    const formData = await request.formData()
//data from our from will be stored in the var formData

const timeStamp = Date.now();
const img = formData.get('img');
const imageByteDate = await img.arrayBuffer();
const buffer = Buffer.from(imageByteDate);
const path = `./public/${timeStamp}_${img.name}`;
await writeFile(path,buffer);
const imgURL = `/${timeStamp}_${img.name}`



const productData = {
    description: `${formData.get('description')}`,
    story: `${formData.get('story')}`,
    category: `${formData.get('category')}`,
    img: `${imgURL}`,
    price: `${formData.get('price')}`
}

await ShopModel.create(productData);
console.log('Product saved')
return NextResponse.json({success:true, msg:'Product added'})
}

export async function DELETE(request){
    const idOfItem = await request.nextUrl.searchParams.get('id')
    const theItem = await ShopModel.findById(idOfItem);
    //to delete an image from pubclic folder
    fs.unlink(`./public${theItem.img}`,()=>{}
    );
    await ShopModel.findByIdAndDelete(idOfItem);
    return NextResponse.json({msg:'Deleted'})
}