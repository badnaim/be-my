import express from "express";
import multerHandler from "../util/multer-handler.js";
import uploadCloud from "../config/cloudinary-config.js";

const productRouter = express.Router();

productRouter.post(
  "/addproduct",
  multerHandler.single("file"),
  async (req, res) => {
    // console.log(req.file[0].originalname);
    console.log(req.file.path);
    const { secure_url } = await uploadCloud.uploader.upload(req.file.path, {
      folder: "product",
    });
    // console.log("resFromCloud: ", resFromCloud);
    const newProduct = {
      image: secure_url,
      // ...JSON.parse(req.body.details)
    };
    console.log("new Product: ", newProduct);
  }
);

// const newProduct = {
//   image: secure_url,
//   ...JSON.parse(req.body.details)
// };

export default productRouter;
