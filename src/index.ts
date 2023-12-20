

// server.js
// const express = require('express');
// const mongoose = require('mongoose');
// const passport = require('passport');
// const dotenv   = 

import express, { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
// import passport from 'passport';
import dotenv   from 'dotenv';
// import authRoutes from './routes/auth.js';
import cors from 'cors';
// import session from 'express-session';
// import cookieParser from 'cookie-parser';
import authRouter from '../src/routes/Auth';
// Configure session middleware
;
  
dotenv.config();

const app = express();

// app.use(session({
//     secret: 'aXHH7NPJgQD5AEGvhFLDVJZBXmDEvV4G5aaGFjzn0fyFMT8D1D',
//     resave: true,
//     saveUninitialized: true
//   }))

app.use(cors());
app.use(express.json());
// app.use(cookieParser());

//TODO---RoutesApi----------//
app.use('/api',authRouter)


// TODO----sendErrorToUser------//

interface Errors {
    status:number,
    message:string
}

app.use((err:Errors, req:Request, res:Response, next:NextFunction) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";

  return res.status(errorStatus).send(errorMessage);
});

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
  }));
//TODO------Set up middleware-------//
app.use(express.json());
// app.use(passport.initialize());

//TODO-------Define routes---------//




//?-------Connect to MongoDB & Start the server-------//
mongoose.set('strictQuery', true)
const PORT = process.env.PORT || 4040
const mongUri:any = process.env.MONGO_URI
mongoose.connect(mongUri)
.then(() => {
    app.listen(PORT, () =>{
        console.log(`connect to database & listening on port ${PORT}`)
    })
}).catch((error) =>{
    console.log(error.message)
})

