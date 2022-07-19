import { FC } from "react";
import Header from "../Header/Header";

interface LayoutProps {
  children: any;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="p-10 h-screen text-center sm:p-4 xs:px-2">
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
