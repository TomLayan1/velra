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
export interface CategoryFilterType {
  id: number,
  name: string
}
export interface BrandType {
  id: number;
  name: string;
}
export interface ProductsReducerStateType {
  allProducts: ProductsType[] | [];
  searchedProducts: ProductsType[] | [];  
  selectedProduct: ProductsType | null;
  selectedCategory: string[];
  selectedBrands: string[];
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
export interface OrdersType {
  id: number;
  img: string;
  name: string;
  quantity: number;
  price: string;
}