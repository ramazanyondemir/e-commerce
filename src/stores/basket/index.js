import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    _addProduct: (state, action) => {
      const { product, count, totalamount } = action.payload;
      const existingProduct = state.basket.find(
        (item) => item.product.productName === product.productName
      );
      if (existingProduct) {
        existingProduct.count += count;
        existingProduct.totalamount = existingProduct.count * product.price;
      } else {
        state.basket.push({ product, count, totalamount });
      }
    },
    // _countIncrement: (state, action) => {
    //   state.basket()
    // },
  },
});

export const { _addProduct } = basketSlice.actions;

export default basketSlice.reducer;
