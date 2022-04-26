import express from "express"

 export function expressConnection(){
    try{
        const app=express();
        const port=process.env.PORT;
        app.listen(port,()=>{console.log("App is connected in port :7000")});
    }catch(error){
        console.log("Error in express connection")
    }
};