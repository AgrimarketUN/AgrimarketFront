import React from "react";
import { Route, Routes } from "react-router-dom";
import { RouterLayout } from "./common";
import { ForgotPassword, Home, SignUp } from "./pages";

const AppRouter: React.FC<{}> = () => {
  return (
    <Routes>
      <Route path="/" element={<RouterLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="forgotPassword" element={<ForgotPassword />} />
      </Route>
    </Routes>
  );
};
export default AppRouter;
