import { createStore, combineReducers } from "redux";
import { productReducer } from "../Reducer/productReducer";

export const pruductStore = () => {
  const myStore = createStore(
    combineReducers({ productReducer }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return myStore;
};
