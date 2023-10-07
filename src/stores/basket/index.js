import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: [
    {
      product: {
        id: 3,
        productName: "Filtre Kahve",
        productPhotos:
          "https://cdn.getir.com/product/6308a3aba93f5ea5b4cd1b69_tr_1661513166846.jpeg",
        price: 2000,
        categorie: [
          {
            categorieName: "Kahve",
          },
        ],
        stock: 5,
      },
      count: 3,
    },
  ],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    _addProduct: (state, action) => {
      const { product, count } = action.payload;
      const existingProduct = state.basket.find(
        (item) => item.product.id === product.id
      );
      if (existingProduct) {
        existingProduct.count += count;
      } else {
        state.basket.push({ product, count });
      }
    },
    _countIncrement: (state, action) => {
      state.basket.forEach((item) => {
        if (item.product.id === action.payload) {
          item.count += 1;
        }
      });
    },
    _countDecrement: (state, action) => {
      state.basket.forEach((item) => {
        if (item.product.id === action.payload) {
          if (item.count > 1) item.count -= 1;
        }
      });
    },
    _countChange: (state, action) => {
      state.basket.forEach((item) => {
        if (item.product.id === action.payload.id) {
          item.count = action.payload.value;
        }
      });
    },
    _removeProduct: (state, action) => {
      const filteredBasket = state.basket.filter(
        (item) => item.product.id !== action.payload
      );
      state.basket = filteredBasket;
    },
  },
});

export const {
  _addProduct,
  _countIncrement,
  _countDecrement,
  _countChange,
  _removeProduct,
} = basketSlice.actions;

export default basketSlice.reducer;
