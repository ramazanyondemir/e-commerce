import store from "..";
import { _addProduct } from ".";

export const addProduct = (product, count = 1, totalAmount = 1) =>
  store.dispatch(_addProduct({ product, count, totalAmount }));
