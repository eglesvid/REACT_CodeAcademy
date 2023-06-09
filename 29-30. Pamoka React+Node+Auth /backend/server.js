import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./routes/index.js";

dotenv.config();

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI;

const app = express();

app.use(cors());
app.use(express.json()); // kad backend gerai json suvalgytu
app.use(router);

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));

app.listen(PORT, () => console.log(`application running on port ${PORT}`));
