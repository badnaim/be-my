import CategorySch from "../model/category.js";

export const getCategory = async () => {
  return await category.find({}).then((res) => {
    return res;
  });
};

export async function addCategory(newCategory) {
  const newCateg = new CategorySch(newCategory);
  console.log("newCateg", newCateg);
  const result = await newCateg.save();
  console.log("result", result);
  return result;
}
