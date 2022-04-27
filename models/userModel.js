//  packages imports
import mongoose from "mongoose";

const schema=mongoose.Schema;

// user schema
const userSchema=new schema({
    name:{
        type:String,
        required:true
    },
    emailid:{
        type:String,
        required:true,
    },
    contactno:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    plan:{
        type:String
    }
})

// user model
export const users=mongoose.model("users",userSchema);