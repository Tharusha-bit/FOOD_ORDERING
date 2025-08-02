import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://tharusha:Tharusha@cluster0.uft3tiw.mongodb.net/food-del').then(()=>console.log("DB Connected !"));
    
};