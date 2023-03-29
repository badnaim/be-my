import express from "express";
import { getCategory, addCategory } from "../service/category-service.js";
import multerHandler from "../util/multer-handler.js";
// import imageUplo

const categoryRouter = express.Router();

categoryRouter.get("/", async (req, res) => {
  console.log("category huselt orj irlee");
  const result = await getC;
});
