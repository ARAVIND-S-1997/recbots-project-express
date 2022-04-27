// other file imports
import { users } from "../models/userModel.js";

// packages imports
import jwt from "jsonwebtoken";


// update plan request
export const updatePlanFunction = async (request, response) => {
    try {
        const { token, emailid } = request.headers;
        console.log("Token  (Update plan functionality) :", token);
        console.log("Email id  (Update plan functionality) :", emailid);

        const { newplan } = request.body;
        console.log("New plan is", newplan);

        // verifying the token
        const check = jwt.verify(token, process.env.SECRET_KEY);
        if (check) {

            // if token verified
            const updatePlan = await users.findOneAndUpdate({ emaiiid: emailid }, { plan: newplan });
            response.status(200).send( updatePlan );
        }
        else {
            response.status(400).send("Invalid token");
        }
    } catch (error) {
        console.log("Error is (Update plan functionality): ", error);
    }

}

