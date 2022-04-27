// other file imports
import { users } from "../models/userModel.js";
import { passwordGenerator } from "../passwordGenerator.js";


// signup function
export const signupFunction = async (request, response) => {
    try {
        const { name, emailid, contactno, password,plan} = request.body;
        console.log("Name (signup function):", name);
        console.log("Email (signup function):", emailid);
        console.log("Contact no (signup function):", contactno);
        console.log("Password  (signup function):", password);
        console.log("Plan  (signup function):", plan);

        // checking whether the user already exist or not
        const findUser = await users.findOne({ emailid: emailid });
        // if yes
        if (findUser) {
            response.status(422).send({ message: "Email id already exist" });
            return;
        }

        // if not
        else {
            const finalPassword = await passwordGenerator(password);
            const data = new users({
                name: name,
                emailid: emailid,
                contactno: contactno,
                password: finalPassword,
                plan:plan

            });

            const addUser = await data.save();
            response.status(200).send({ message: "signup process was success " });
        }
    } catch (error) {
        console.log("Error is (Signup function):", error);
    }
}