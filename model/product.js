import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    stock: Number,
    sale: Number,
    specs: String,
    brand: String,
    category: String,
    description: String,
    image: String,
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: "products",
  }
);

const ProductSch = mongoose.model("product", productSchema, "products");

export default ProductSch;
