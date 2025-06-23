import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    mongoose.connection.on('connected',() => {
        console.log("Db Connected");
    })
    await mongoose.connect(`${process.env.MONGO_URI}/zproject`)
}

export default connectDB;