import mongoose from "mongoose";
export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://olgalavida:sDrxoV4bDVXqf8vM@cluster0.3gioy.mongodb.net/pottery');
    console.log("DB connected")
}