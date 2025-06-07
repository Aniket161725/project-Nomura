import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

const port = 9080 || "error";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API running... yp");
});

const start = async () => {
    const connectDB = await mongoose.connect("mongodb+srv://aniketdekate1:4P1cb7f25dMtC1xo@cluster0.krohefs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
}

app.listen(port, () => {
    console.log(`server is running on port ${port} `);
})


start();