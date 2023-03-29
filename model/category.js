import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: String,
    image: String,
  },
  {
    collection: "categories",
  }
);

const CategorySch = mongoose.model("category", categorySchema, "categories");

export default CategorySch;
