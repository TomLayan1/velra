import { AddToCartActionType, CartStateType } from "../../Interface/interface";
import { ADD_TO_CART } from "../actionTypes";

const InitialCartState: CartStateType = {
  cart: []
}

const AddToCartReducer = (
  state: CartStateType = InitialCartState,
  action: AddToCartActionType
): CartStateType => {
  switch(action.type) {
    case ADD_TO_CART: {
      const isExisting = state.cart.find(item => item.id === action.payload.id);

      let newCartState;

      if (isExisting) {
        newCartState = {
          ...state,
          cart: state.cart.map(item => item.id === action.payload.id
            ? {...item, quantity: (item.quantity || 1) + 1}
            : item
          )
        }
      } else {
        newCartState = {
          ...state,
          cart: [...state.cart, {...action.payload, quantity: 1}]
        }
      }
      console.log("Updated Cart:", newCartState.cart);
      return newCartState;
    }
    default: return state
  }
}

export default AddToCartReducer