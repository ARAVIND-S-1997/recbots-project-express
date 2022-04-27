// other file imports
import express from "express";

// other file imports
import { loginFunction } from "../modules/loginModule.js";
import { signupFunction } from "../modules/signupModule.js";
import { updatePlanFunction } from "../modules/updatePlanModule.js";


const router=express.Router();
export const allRoutes=router;


// route for signup
router.post("/signup",signupFunction);

// route for login
router.post("/login",loginFunction);

// route for update plan
router.post("/plan",updatePlanFunction);