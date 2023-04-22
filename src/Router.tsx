import React from "react";
import { Route, Routes } from "react-router-dom";
import { RouterLayout } from "./common";
<<<<<<< HEAD
import { ForgotPassword, Login, SignUp, Test } from "@/pages";
import RestorePassword from "./pages/RestorePassword/RestorePassword";
=======
import { ForgotPassword, Login, SignUp } from "@/pages";
>>>>>>> 198be7db914e40b714df5d2cb58fdbe0a95d44fd

const AppRouter: React.FC<{}> = () => {
  return (
    <Routes>
      <Route path="/" element={<RouterLayout />}>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/restorePassword" element={<RestorePassword />} />
        <Route path="/dashboard" element={<div>Dashboard</div>} />
        <Route path="*" element={<div>404</div>} />
      </Route>
    </Routes>
  );
};
export default AppRouter;
