import { FILTER_BY_CATEGORY, SHOW_PRODUCT_DETAILS } from "../actionTypes";
import { ProductsType } from "../../Interface/interface";

export const showProductDetails = (product: ProductsType | undefined) => {
  return {
    type: SHOW_PRODUCT_DETAILS,
    payload: product
  }
}

export const filterByCategory = (product: ProductsType | undefined) => {
  return {
    type: FILTER_BY_CATEGORY,
    payload: product
  }
}