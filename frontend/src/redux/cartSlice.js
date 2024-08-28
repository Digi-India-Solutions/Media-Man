// src/redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: JSON.parse(localStorage.getItem('cartItems')) || [],
    cartCount: JSON.parse(localStorage.getItem('cartItems'))?.length || 0,
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      state.cartCount += 1;
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((_, index) => index !== action.payload);
      state.cartCount = state.items.length;
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    clearCart: (state) => {
      state.items = [];
      state.cartCount = 0;
      localStorage.removeItem('cartItems');
    }
  }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
