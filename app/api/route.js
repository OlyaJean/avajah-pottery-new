import { connectDB } from "@/app/library/config/db"

const { NextResponse } = require("next/server")
import {writeFile} from 'fs/promises'
const loadDB = async() =>{
    await connectDB();

}
loadDB();

export async function GET(request){
    
    return NextResponse.json({msg:'api working'})
}

export async function POST(request){

    const formData = await request.formData()
//data from our from will be stored in the var formData
const timeStamp = Date.now();
const img = formData.get('img');

const imageByteData = await img.arrayBuffer()
const buffer = Buffer.from(imageByteData);
const path = `./public/${timeStamp}_${img.name}`
await writeFile(path,buffer)
//now our image will be stored in public folder

const imgURL = `./public/${timeStamp}_${img.name}`
const productData = {
    description: `${formData.get('description')}`
}
return NextResponse.json({imgURL})
}