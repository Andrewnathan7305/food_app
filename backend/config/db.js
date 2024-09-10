import mongoose from "mongoose"


export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://andrewnathan0704:andrewnathan0704@cluster0.t1zij.mongodb.net/food_app').then(()=>console.log("DB connected"));
}