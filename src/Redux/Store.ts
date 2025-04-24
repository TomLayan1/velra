import { combineReducers, createStore } from "redux";

import AddToCartReducer from "./cart/cartReducers";


// Combine reducers
const rootReducer = combineReducers({
  addToCartReducer: AddToCartReducer
});

// RootState type from combined reducers
export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(
  rootReducer,
)

export default store;