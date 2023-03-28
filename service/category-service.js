import CategorySch from "../model/category";

// export const getCategory = async () => {
//     return await
// }

export function addCategory(newCateg) {
  console.log(newCateg);
  const newCat = new CategorySch(newCateg);
  let result = newCat.save();
  return result;
}
