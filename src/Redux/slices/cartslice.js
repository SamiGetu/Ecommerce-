/* eslint-disable no-undef */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0,
};

const cartslice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++;

      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          title: newItem.title,
          ProductsImage: newItem.ProductsImage,
          Price: newItem.Price,
          quantity: 1,
          totalPrice: newItem.Price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += Number(newItem.Price);
      }
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.totalPrice),
        0
      );
    },
    deleteItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
        state.totalQuantity -= existingItem.quantity;
      }
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.totalPrice),
        0
      );
    },
  },
});

export const cartActions = cartslice.actions;

export default cartslice.reducer;
