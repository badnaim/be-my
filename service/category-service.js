import CategorySch from "../model/category.js";

// export const getCategory = async () => {
//   return await category.find({}).then((res) => {
//     return res;
//   });
// };

export const addCategory = async (newCategory) => {
  // console.log(newCateg);
  const newCateg = new CategorySch(newCategory);
  const result = await newCateg.save();
  console.log(result);
  return result;
};
