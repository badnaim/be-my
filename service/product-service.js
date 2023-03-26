import ProductSch from "../model/product.js";

export function addProduct(newProduct) {
  console.log(newProduct);
  const newProd = new ProductSch(newProduct);
  let result = newProd.save();
  return result;
}
