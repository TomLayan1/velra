import { ADD_TO_CART } from "../actionTypes";
import { CartType, CartStateType } from "../../Interface/interface";

type AddToCartActionType = {
  type: typeof ADD_TO_CART;
  payload: CartType
}

const cartState: CartStateType = {
  cart: []
}

export const AddToCartReducer = (
  state: CartStateType = cartState,
  action: AddToCartActionType
): CartStateType => {
  switch (action.type) {
    case ADD_TO_CART: {
      const isExisting = state.cart.find(item => item.id === action.payload.id);

      if (isExisting) {
        return {
          ...state,
          cart: state.cart.map(item => item.id === action.payload.id
            ? {...item, quantity: (item?.quantity || 1) + 1}
            : item
          )
        }
      } else {
        return {
          ...state,
          cart: [...state.cart, {...action.payload, quantity: 1}]
        }
      }
    }
    default: return state
  }
}