import { ADD_TO_CART } from "../actionTypes";
import { ProductsType } from "../../Interface/interface";

export const addToCart = (product: ProductsType | undefined) => {
  return {
    type: ADD_TO_CART,
    payload: product
  }
}

// Define action type
export type AddToCartActionType = ReturnType<typeof addToCart>;