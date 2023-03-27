import express from "express";
import cors from "cors";
import productRouter from "./controller/product-controller.js";
import db from "./config/mongoose-config.js";
import * as dotenv from "dotenv";

console.log("cloud", process.env.API_SECRET);

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
app.use(productRouter);
console.log("cloud", process.env.API_SECRET);

app.listen(port, () => {
  console.log("listening on port", port);
});
