import { RootState } from "../Redux/Store";
import { products } from "../Data/Data";

export const selectedFilteredProducts = (state: RootState) => {
  const { selectedCategory, selectedBrands } = state.product;

  return products.filter(product => {
    const matchedCategory = selectedCategory.length === 0 || selectedCategory.includes(product.category);
    const matchedBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    return matchedCategory && matchedBrand;
  })
}