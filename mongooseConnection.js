import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


export async function mongooseConnection(){
    try{
        const connection=await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB is connected");
    }catch(error){
        console.log("Error in DB connection")
    }
}