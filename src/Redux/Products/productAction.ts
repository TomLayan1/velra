import { SHOW_PRODUCT_DETAILS } from "../actionTypes";
import { ProductsType } from "../../Interface/interface";

export const showProductDetails = (product: ProductsType | undefined) => {
  return {
    type: SHOW_PRODUCT_DETAILS,
    payload: product
  }
}