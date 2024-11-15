import mongoose from "mongoose";
export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://olgalavida:sD@cluster0.3gioy.mongodb.net/pottery');
    console.log("DB connected")
}