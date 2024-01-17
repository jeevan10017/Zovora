import mongoose, { connect } from "mongoose";

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI); // MONGO_URI is the connection string
         console.log(`MongoDB Connected: ${conn.connection.host}`);
        }catch(error){
            console.error(`Error: ${error.message}`);
            process.exit(1);
        }
    };
    export default connectDB;