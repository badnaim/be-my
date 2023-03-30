import express, { response, Router } from "express";
import multerHandler from "../util/multer-handler.js";
import uploadCloud from "../config/cloudinary-config.js";
import ProductSch from "../model/product.js";
import { addProduct } from "../service/product-service.js";

const productRouter = express.Router();

productRouter.get("/getProducts", async (req, res) => {
  console.log("get product request");
  const getProduct = await ProductSch.find({});
  try {
    res.send({ status: "ok", body: getProduct });
    // console.log(getProduct);
  } catch (error) {
    console.log(error);
  }
});

productRouter.post(
  "/addproduct",
  multerHandler.single("file"),
  async (req, res) => {
    console.log(req.body.data);
    console.log(req.file.path);

    const { secure_url } = await uploadCloud.uploader.upload(req.file.path, {
      folder: "product",
    });

    const newProduct = {
      image: secure_url,
      ...JSON.parse(req.body.data),
    };

    console.log("new Product: ", newProduct);

    let result = await addProduct(newProduct);

    try {
      res.status(200).send({ data: result });
    } catch (error) {
      res.status(403).send({ error: "didnt work" });
    }
  }
);

export default productRouter;
