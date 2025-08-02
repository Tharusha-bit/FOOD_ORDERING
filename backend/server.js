import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// app config
const app = express();
const port = 4000;

//middleware
app.use(express.json()); // when we get request from frontend to backend it is passing through this middleware
app.use(cors()); // using this we can access backend from any frontend

//db connection
connectDB();

//API endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("API working !");
});

app.listen(port, () => console.log("Server is running on port 4000"));

//mongodb+srv://tharusha:<db_password>@cluster0.uft3tiw.mongodb.net/?
