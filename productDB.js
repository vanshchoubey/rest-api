import connectDB from "./db/connect.js";
import { Products } from "./model/model.js";
import dotenv from "dotenv";
import json from "./products.json" assert { type: "json" };
dotenv.config();
const start = async () => {
  try {
    await connectDB(process.env.URI);
    await Products.deleteMany()
    await Products.create(json);
    console.log("sucess");
  } catch (error) {
    console.log(error);
  }
};
start();
