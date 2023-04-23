import React from "react";
import { Route, Routes } from "react-router-dom";
import { RouterLayout } from "./common";
import { DashBoardPage, HomePage, SignUpPage } from "./pages";

const AppRouter: React.FC<{}> = () => {
  return (
    <Routes>
      <Route path="/" element={<RouterLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/dashBoard" element={<DashBoardPage />} />
      </Route>
      <Route path="/nose" element={<div>Hola</div>} />
    </Routes>
  );
};
export default AppRouter;