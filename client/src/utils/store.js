import { createStore } from "@reduxjs/toolkit";
import { reducer } from "./reducers";

// initial state
const rootState = {
  products: [],
  cart: [],
  cartOpen: false,
  categories: [],
  currentCategory: ''
}

// define store
const store = createStore(reducer, rootState);

// export store
export default store;