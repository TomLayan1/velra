import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductsType, ProductsReducerStateType } from "../../Interface/interface";

const initialState: ProductsReducerStateType = {
  allProducts: [],
  searchedProducts: [],
  selectedProduct: null,
  selectedCategory: [],
  selectedBrands: [],
}

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setAllProducts: (state, action: PayloadAction<ProductsType[]>) => {
      state.allProducts = action.payload;
      state.searchedProducts = action.payload;
    },
    selectProduct: (state, action: PayloadAction<ProductsType>) => {
      state.selectedProduct = action.payload;
    },
    searchProducts: (state, action: PayloadAction<string>) => {
      const query = action.payload.toLowerCase();
      state.searchedProducts = state.allProducts.filter(product => (
        product.title.toLowerCase().includes(query)
        || product.category.toLowerCase().includes(query)
        || product.brand.toLowerCase().includes(query)
      ))
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
    },
  }
});

export const {
  setAllProducts,
  selectProduct,
  searchProducts,
  handleCategoryFilter,
  handleBrandsFilter
} = productSlice.actions;

export default productSlice.reducer;