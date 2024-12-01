import mongoose from "mongoose";
const MONGO_URI = process.env.NEXT_PUBLIC_MONGO_URI;

export const connectDB = async () => {


        await mongoose.connect(MONGO_URI);
        console.log("DB connected")
    
 

}
