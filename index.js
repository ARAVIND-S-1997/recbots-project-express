//  packages imports
import cors from "cors";
import express from "express";

// other files imoports
import { mongooseConnection } from "./mongooseConnection.js";
import { allRoutes } from "./routes/allRoutes.js";

// mongoDB and express connection
await mongooseConnection();
const app = express();
const port = process.env.PORT;
app.listen(port, () => { console.log("App is connected in port :7000") });

// middleware
app.use(express.json());
app.use(cors());
app.use("/user", allRoutes);