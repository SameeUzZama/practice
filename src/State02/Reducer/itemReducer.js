//(1)take 1st reducer function n then take two parameters
//action is always be object thats why converts state into object
export const itemReducer = (state = { product: [] }, action) => {
  //(2)
  if (action.type === "ADD_PRODUCT") {
    //(3)excisting and new array replace
    return { ...state, product: [...action.data, ...state.product] };
  }
  //(4)
  if (action.type === "SELECTED_PRODUCT") {
    return { ...state, selectedProd: [action.data] };
  }
  //(5)
  if (action.type === "REMOVE_PRODUCT") {
    //   (6)
    const filtered = state.product.filter((item) => item !== action.data);
    return { ...state, product: [...filtered] };
  }
  return state;
};
