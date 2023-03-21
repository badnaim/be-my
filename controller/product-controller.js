import express from "express";
import multerHandler from "../util/multer-handler.js";
import uploadCloud from "../config/cloudinary-config.js";

const productRouter = express.Router();

productRouter.post("/addproduct", multerHandler.single("file"), async (req, res) => {
  console.log(req);
  const { secure_url } = await uploadCloud.uploader.upload(req.file.path, folder: "product",)
});

export default productRouter;
