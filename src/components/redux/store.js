// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice'; // <-- 這邊請對照你的路徑

const store = configureStore({
  reducer: {
    cart: cartReducer
  }
});

export default store;
