"use client";

import store from "@/redux/configureStore";
import React, { createContext } from "react";
import { Provider } from "react-redux";

export const NameContext = createContext("a");

export default function NameProvider({ name, children }) {
  console.log(name);
  return (
    <Provider store={store}>
      <NameContext.Provider value={name}>{children}</NameContext.Provider>
    </Provider>
  );
}
