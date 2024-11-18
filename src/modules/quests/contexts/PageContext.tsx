import React from "react";
import { StoreProvider } from "easy-peasy";
import store from "./page-store";

type TPageProviderProps = { children?: React.ReactNode };

const PageProvider = ({ children }: TPageProviderProps) => {
  return <StoreProvider store={store}>{children}</StoreProvider>;
};

export default PageProvider;
