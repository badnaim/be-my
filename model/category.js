import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: String,
    image: String,
  },
  {
    collection: "category",
  }
);

const CategorySch = mongoose.model("category", categorySchema, "category");

export default CategorySch;
