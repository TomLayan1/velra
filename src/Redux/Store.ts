import { configureStore } from "@reduxjs/toolkit";
import productReducer from './Products/productReducer'
import cartReducer from './cart/cartReducer';

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
  }
});

export default store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;