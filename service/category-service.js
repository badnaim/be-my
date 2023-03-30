import CategorySch from "../model/category.js";

// export const getCategory = async () => {
//   return await category.find({}).then((res) => {
//     return res;
//   });
// };

export function addCategory(newCategory) {
  // console.log(newCateg);
  const newCateg = new CategorySch(newCategory);
  const result = newCateg.save();
  console.log(result);
  return result;
}
