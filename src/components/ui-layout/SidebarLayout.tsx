import React from "react";
import Header from "./Header";
import SideActiveList from "./SideActiveList";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

type TSidebarLayoutProps = { children?: React.ReactNode };

const SidebarLayout = ({ children }: TSidebarLayoutProps) => {
  return (
    <>
      <Header className="fixed z-50" />

      <main className="h-dvh pt-14 xl:pt-16 flex relative">
        <SideActiveList />
        <Sidebar />
        <div className="h-full overflow-y-auto overflow-x-hidden flex-[1_1_auto] min-w-0">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default SidebarLayout;
