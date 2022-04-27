// other file imports
import { users } from "../models/userModel.js";
import { token } from "../tokenGenerator.js";

// packages imports
import bcrypt from "bcrypt"

// login function
export const loginFunction = async (request, response) => {
    try {
        const { emailid, password } = request.body;
        console.log("Email id(Login Function) :", emailid);
        console.log("Password (Login Function):", password);

        // finding the user
        const findUser=await users.findOne({emailid:emailid});

        if(findUser){
            const storedPassword=findUser.password;
            console.log("Password in db is (Login Function):",storedPassword);

            const{_id,plan,name}=findUser;
            console.log("Id is (Login Function):",_id);
            console.log("Plan is (Login Function):",plan);
            // verifying the password

            const checkPassword = await bcrypt.compare(password, storedPassword);
            if(checkPassword){
                // if verified generate token and send required data
                const finaltoken=await token({_id})
                response.status(200).send({finaltoken,emailid,plan,name});
                return;
            }
            else{
                response.status(400).send({message:"Invalid password"})
            }
        }
    else{
        response.status(400).send({message:"Invalid user"})
    }
    } catch (error) {
        console.log("Error is (Login function) ", error);
    }
}