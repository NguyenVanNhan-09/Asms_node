import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
export default async function connectMongodb(dburl) {
   try {
      await mongoose.connect(dburl);
      console.log("Connect Successfully !!!");
   } catch (error) {
      console.log("Connect false");
   }
}
