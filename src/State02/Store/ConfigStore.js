import { createStore, combineReducers } from "redux"; //(1)
import { productReducer } from "./productReducer"; //(7)
import { cartReducer } from "./cartReducer"; //(8)

//(2) write which function who store create
const configStore = () => {
  //(3) take variable to store create and inside this redux will create
  const myStore = createStore(
    combineReducers({
      //(4) they are pure function
      productReducer,
      cartReducer,
    }),
    //(5)
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  //(6)
  return myStore;
};
export default configStore;
