import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartStateType, CartType } from "../../Interface/interface";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const initialState: CartStateType = {
  cart: []
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartType>) => {
      const existingItem = state.cart.find((item) => item.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.cart.push({ ...action.payload });
      }
      toast('Item added to Cart');
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.cart.find((i) => i.id === action.payload);
      if (item) item.quantity += 1;
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.cart.find((i) => i.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter((i) => i.id !== action.payload);
      toast.warn('Item removed from Cart')
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
