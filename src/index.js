// import mongoose from 'mongoose'
// import { DB_NAME } from './constants';
// import express from 'express'
// const app=express();

// ;(async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        
//         app.on('error',(error)=>{
//             console.log("error:",error)
//             throw error
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`Server listening on port ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.error("error :",error)
//         throw error
//     }
// })()

// require('dotenv').config({path:'./env'})
import dotenv from 'dotenv'
dotenv.config({
    path:'./env'
})
import connectDB from "./DB/index.js";
connectDB();