import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(process.env.MONGOURL)
  .then(() => {
    console.log("Connected to Mongo Db");
  })
  .catch((err) => console.log(err));

const app = express();
app.listen(3000, () => {
  console.log("Sever listning on port 3000");
});
