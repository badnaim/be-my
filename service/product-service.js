import ProductSch from "../model/product.js";

export const getProduct = async () => {
  return await productRouter.find({}).then((res) => {
    return res;
  });
};

export function addProduct(newProduct) {
  console.log(newProduct);
  const newProd = new ProductSch(newProduct);
  let result = newProd.save();
  return result;
}
