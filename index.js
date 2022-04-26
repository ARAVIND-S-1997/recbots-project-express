import { mongooseConnection } from "./mongooseConnection.js";
import {expressConnection} from "./expressConnection.js";

await mongooseConnection();
await expressConnection();

