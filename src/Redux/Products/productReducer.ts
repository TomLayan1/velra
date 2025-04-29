import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductsType, ProductsReducerStateType } from "../../Interface/interface";

const initialState: ProductsReducerStateType = {
  selectedProduct: null,
  selectedCategory: [],
  selectedBrands: []
}

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    selectProduct: (state, action: PayloadAction<ProductsType>) => {
      state.selectedProduct = action.payload
    },
    handleCategoryFilter: (state, action: PayloadAction<string>) => {
      const name = action.payload;
      state.selectedCategory = state.selectedCategory.includes(name)
      ? state.selectedCategory.filter(category => category !== name)
      : [...state.selectedCategory, name]
    },
    handleBrandsFilter: (state, action: PayloadAction<string>) => {
      const name = action.payload;
      state.selectedBrands = state.selectedBrands.includes(name)
      ? state.selectedBrands.filter(brand => brand !== name)
      : [...state.selectedBrands, name]
    }
  }
});

export const {
  selectProduct,
  handleCategoryFilter,
  handleBrandsFilter
} = productSlice.actions;

export default productSlice.reducer;