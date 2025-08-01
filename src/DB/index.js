import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB=async()=>{
    try {
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log('\n MongoDb connected,DB host: ',connectionInstance.connection.host);//read about this.
        
    } catch (error) {
        console.log("MongoDB connection error:",error);
        process.exit(1);//read about these.
    }
}
export default connectDB;