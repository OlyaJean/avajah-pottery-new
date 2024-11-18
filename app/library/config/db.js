import mongoose from "mongoose";
const password = process.env.MANGO_URI;
export const connectDB = async () => {
    await mongoose.connect(`mongodb+srv://olgalavida:${password}.3gioy.mongodb.net/pottery`);
    console.log("DB connected")
}