import React from "react";
import { StoreProvider } from "easy-peasy";
import store from "./app-store";

type TAppProviderProps = { children?: React.ReactNode };

const AppProvider = ({ children }: TAppProviderProps) => {
  return <StoreProvider store={store}>{children}</StoreProvider>;
};

export default AppProvider;
