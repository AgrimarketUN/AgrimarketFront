import React from "react";
import NavBar from "./NavBar";
import { PrivateWrapper } from "./Styles/layout.style.component";

export interface PrivateGritProps {
  children: React.ReactNode;
}

const PrivateGrid: React.FC<PrivateGritProps> = ({ children }) => {
  return (
    <PrivateWrapper>
      <NavBar />
      {children}
    </PrivateWrapper>
  );
};

export default PrivateGrid;