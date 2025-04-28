import { ADD_TO_CART } from "../Redux/actionTypes";

export interface BannerType {
  id: number;
  banner: string;
  text: string;
  sub_text: string;
}

export interface ProductsType {
  id: number;
  img: string;
  category: string;
  brand: string;
  title: string;
  short_description: string;
  price: string;
  description: string;
}
export interface SelectedProductType {
  selectedProduct: ProductsType | null;
}
export type CartType = ProductsType & {
  quantity: number
}

export interface CartStateType {
  cart: CartType[];
}

export interface AddToCartActionType {
  type: typeof ADD_TO_CART;
  payload: CartType
}