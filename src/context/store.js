import React from "react";
import StoreInitialState from "./state";
import reducer from "./reducer";

export const Context = React.createContext();
export const Store = (props) => {
  const [state, dispatch] = React.useReducer(reducer, StoreInitialState);
  return (
    <Context.Provider value={{ state, dispatch }}>
      {props.children}
    </Context.Provider>
  );
};
