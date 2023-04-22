import React from "react";
import { Route, Routes } from "react-router-dom";
import { RouterLayout } from "./common";

import { ForgotPassword, Login, SignUp} from "@/pages";
import RestorePassword from "./pages/RestorePassword/RestorePassword";

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
