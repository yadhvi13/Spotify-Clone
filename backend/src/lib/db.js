//FOR USER DATABASES

import mongoose, { mongo } from "mongoose";

export const connectDB = async () => {
    try {
       const conn =  await mongoose.connect(process.env.MONGO_URI);
       console.log(`connected to MNOGODB ${conn.connection.host}`);
       
    } catch (error) {
        console.log("failed to connect to MONGODB", error);
        process.exit(1);  //1 is failure, 0 is success
    }
}