// require('dotenv').config({path:'./env'})
import dotenv from "dotenv";


import connectDB from "./db/index.js";
import { config } from "dotenv";


dotenv.config({path:'./env'});




connectDB()
.then(()=>{
  app.listen(process.env.PORT||8000,()=>{
    console.log(`server is running at port ${process.env.PORT}`);
  })
})
.catch((err)=>{
  console.log("MONGO db connection failed",err);
})










/*

import express from "express"
const app =express()


(async()=>{
  try{
await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
app.on("Errror",(error)=>{
  console.log("Error",error);
  throw error
})
app.listen(process.env.PORT,()=>{
  console.log(`app is listening on port ${process.env.PORT}`);
})
  }
  catch(error){
    console.error("Error:",error)
    throw err
  }
})()
  */