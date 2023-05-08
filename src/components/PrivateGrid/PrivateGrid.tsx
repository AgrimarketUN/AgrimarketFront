import React from "react";
import { PrivateWrapper } from "../../common/Styles/layout.style.component";
import NavBar from "../../common/NavBar";

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