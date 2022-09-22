//import mongoose and mongoose error handler
import mongoose from "mongoose";

const connectDB = async (URI: string) => {
    mongoose.connect(URI, (err: any) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Database connected successfully...");
        }
    });
}