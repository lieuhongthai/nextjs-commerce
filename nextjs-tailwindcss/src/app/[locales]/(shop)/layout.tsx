import { ReactNode } from "react";
import NavBar from "@/@core/components/nav";

type RootLayoutTypes = { children: ReactNode };

const Layout = ({ children }: RootLayoutTypes) => {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
};

export default Layout;
