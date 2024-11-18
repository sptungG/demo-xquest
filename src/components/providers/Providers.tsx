import React from "react";
import AppProvider from "../../contexts/AppContext";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

type TProvidersProps = { children?: React.ReactNode };

const Providers = ({ children }: TProvidersProps) => {
  return (
    <AppProvider>
      {children}
      <ToastContainer position="top-center" stacked />
    </AppProvider>
  );
};

export default Providers;
