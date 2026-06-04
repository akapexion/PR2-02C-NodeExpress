import mongoose from "mongoose";
import dotenv from 'dotenv';
import path from 'path';

dotenv.config("../../");


const dbConnect = async() => {
    try{
        // await mongoose.connect("mongodb://localhost:27017/practice-class");

        // await mongoose.connect("mongodb+srv://asadkaptech:123@cluster0.lkprvgu.mongodb.net/?appName=Cluster0/school");
        await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("MongoDB Connected Successfully");
    }
    catch(err){
        console.log("MONGODB Connect Err", err);
    }
}

// dbConnect();
export default dbConnect;