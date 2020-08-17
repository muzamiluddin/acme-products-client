import React from "react";

const reducer = (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case "UPDATE_PRODUCTS":
      return updateProducts(state, payload);
    case "UPDATE_DEPARTMENTS":
      debugger;
      return { ...state, departments: payload };
    default:
      return state;
  }
};

function updateProducts(state, products) {
  return { ...state, products: products };
}

export default reducer;
