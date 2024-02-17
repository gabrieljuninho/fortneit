import { ReactNode } from "react";

import Sidebar from "./sidebar";

interface LayoutsProps {
  children: ReactNode;
}

const Layouts = ({ children }: LayoutsProps) => {
  return (
    <div className="relative mx-auto max-w-6xl">
      <div className="flex flex-row">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default Layouts;
