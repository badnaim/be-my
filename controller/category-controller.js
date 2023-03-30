import express, { response, Router } from "express";
import uploadCloud from "../config/cloudinary-config.js";
import CategorySch from "../model/category.js";
import { addCategory } from "../service/category-service.js";
// import CategorySch from "../model/category.js";
import multerHandler from "../util/multer-handler.js";

const categoryRouter = express.Router();

categoryRouter.get("/getcategories", async (req, res) => {
  console.log("category huselt orj irlee");
  const getCategory = await CategorySch.find({});
  try {
    res.send({ status: "ok", body: getCategory });
  } catch (error) {
    console.log(error);
  }
});

categoryRouter.get("/getCategory", async (req, res) => {
  console.log("category get huselt orj irlee mf");
  const getCategory = await CategorySch.find({});
  try {
    res.send({ status: "ok", body: getCategory });
  } catch (error) {
    console.log(error);
  }
});

categoryRouter.post(
  "/addCategory",
  multerHandler.single("file"),
  async (req, res) => {
    console.log(req.body.name);
    console.log(req.file.originalname);
    // console.log("file path", req.file.path);
    // console.log("file path", req.file.path);

    const { secure_url } = await uploadCloud.uploader.upload(req.file.path, {
      folder: "categories",
    });

    const newCategory = {
      image: secure_url,
      ...JSON.parse(req.body.name),
    };
    console.log("new cagtegory", newCategory);
    let result = await addCategory(newCategory);
    try {
      res.status(200).send({ data: result });
    } catch (error) {
      res.status(404).send({ error: "add category problem" });
    }
  }
);

export default categoryRouter;
