import CategorySch from "../model/category";

export const getCategory = async () => {
  return await category.find({}).then((res) => {
    return res;
  });
};

export const addCategory = async (newCategory) => {
  // console.log(newCateg);
  const newCategory = new CategorySch(newCategory);
  const result = await newCategory.save();
  console.log(result);

  return result;
};
