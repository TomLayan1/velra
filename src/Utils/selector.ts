import { RootState } from "../Redux/Store";

export const selectedFilteredProducts = (state: RootState) => {
  const { allProducts, searchedProducts, selectedCategory, selectedBrands } = state.product;

  const sourcedProducts = searchedProducts?.length > 0 ? searchedProducts : allProducts;

  return sourcedProducts.filter(product => {
    const matchedCategory = selectedCategory.length === 0 || selectedCategory.includes(product.category);
    const matchedBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    return matchedCategory && matchedBrand;
  })
}