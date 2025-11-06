//entry point for application

import express from 'express';
import dotenv from "dotenv";
import {clerkMiddleware} from '@clerk/express';
import fileupload from "express-fileupload";
import path from "path";

import { connectDB } from './lib/db.js';

import userRoutes from "./routes/user.route.js";
import adminRoutes from "./routes/admin.route.js";
import albumRoutes from "./routes/album.route.js"
import authRoutes from "./routes/auth.route.js"
import statsRoutes from "./routes/stats.route.js"
import songRoutes from "./routes/song.route.js"

dotenv.config();

const app = express();
const __dirname = path.resolve();
const PORT = process.env.PORT || 3000;

// to get request from the body
app.use(express.json()); //to parse req body

app.use(clerkMiddleware()); //this will add auth to request object => req.auth.userId

app.use(fileupload({
    userTempFiles:true,
    tempFileDir: path.join(__dirname,"temp"),
    createParentPath: true,
    limits:{
        fileSize: 10*1024*1024 // 10MB maxi file size
    }
}))

// CREATING ROUTES
// app.get("/", (req,res) => {
//     res.send("Namaste from Backend");
// })
// CREATING METHODS HERE WOULD BE UGLY, so we will only create routes here

app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/songs", songRoutes);
app.use("/api/albums", albumRoutes);
app.use("/api/stats", statsRoutes);

// error handler middleware
app.use((err,req,res,next) => {
    res.status(500).json({message: process.env.NODE_ENV === "production" ? "Internal server error" : err.message});
})

app.listen(PORT, ()=> {
    console.log("server is running on PORT: " + PORT); 
    connectDB();   
})
