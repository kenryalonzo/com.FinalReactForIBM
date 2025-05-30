import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import productsReducer from "./features/products/productsSlice"; // Add this line

export default configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer, // Add this line
  },
});