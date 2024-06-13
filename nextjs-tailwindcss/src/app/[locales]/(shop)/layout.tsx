import { ReactNode } from "react";
import Header from "@/@core/components/header";
import Drawer from "@/@core/components/drawer";

type RootLayoutTypes = { children: ReactNode };

const Layout = ({ children }: RootLayoutTypes) => {
  return (
    <div>
      <Header />

      <div style={{ height: "100vh" }}></div>

      {children}
    </div>
  );
};

export default Layout;
