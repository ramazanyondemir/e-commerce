import store from "..";
import {
  _addProduct,
  _countChange,
  _countDecrement,
  _countIncrement,
  _removeProduct,
} from ".";

export const addProduct = (product, count = 1) =>
  store.dispatch(_addProduct({ product, count }));

export const incrementCount = (id) => {
  store.dispatch(_countIncrement(id));
};

export const decrementCount = (id) => {
  store.dispatch(_countDecrement(id));
};

export const countChange = (id, value) => {
  store.dispatch(_countChange(id, value));
};

export const removeProduct = (id) => {
  store.dispatch(_removeProduct(id));
};
