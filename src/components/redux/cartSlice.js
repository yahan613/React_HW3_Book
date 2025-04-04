import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartCount: 0
  },
  reducers: {
    increment: (state, action) => {
      state.cartCount += action.payload || 0;
    },
    reset: (state) => {
      state.cartCount = 0;
    }
  }
});

// ✅ 正確 export actions
export const { increment, reset } = cartSlice.actions;

// ✅ 正確 export reducer
export default cartSlice.reducer;
