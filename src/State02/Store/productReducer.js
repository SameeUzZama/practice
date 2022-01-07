// export const productReducer = (state = { product: [] }, action) => {
//   if (action.type === "ADD_PRODUCT") {
//     return { ...state, product: [...action.data, ...state.product] };
//   }
//   if (action.type === "SELECT_PRODUCT") {
//     return { ...state, selectProd: [...action.data] };
//   }
//   if (action.type === "REMOVE_PRODUCT") {
//     const filtered = state.product.filter(
//       (anything) => anything !== action.data
//     );
//     return { ...state, product: [...filtered] };
//   }
// return state;
// };

export const productReducer = (state = { product: [] }, action) => {
  if (action.type === "ADD_PRODUCT") {
    return { ...state, product: [...action.data, ...state.product] };
  }
  if (action.type === "SELECT_PRODUCT") {
    return { ...state, product: [...action.data] };
  }
  if (action.type === "REMOVE_PRODUCT") {
    const filtered = state.product.filter(
      (anything) => anything !== action.data
    );
    return { ...state, product: [...filtered] };
  }
  return state;
};
