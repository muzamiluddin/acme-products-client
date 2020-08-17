import React from "react";

const reducer = (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case "UPDATE_PRODUCTS":
      return updateProducts(state, payload);
    default:
      return state;
  }
};

function updateProducts(state, task) {
  return state;
}

export default reducer;
