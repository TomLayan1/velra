import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductsType, SelectedProductType } from "../../Interface/interface";

const initialState: SelectedProductType = {
  selectedProduct: null
}

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    selectProduct: (state, action: PayloadAction<ProductsType>) => {
      state.selectedProduct = action.payload
    }
  }
});

export const {
  selectProduct
} = productSlice.actions;

export default productSlice.reducer;