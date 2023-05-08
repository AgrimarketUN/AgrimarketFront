import React from "react";
import { Route, Routes } from "react-router-dom";
import { RouterLayout } from "./common";
import { NavBar } from "./common";
import { ForgotPassword, Login, SignUp, MarketCar, DashBoard, RestorePassword} from "@/pages";
import { RoutesNotFound } from "./utils";

const AppRouter: React.FC<{}> = () => {
  return (
    <RoutesNotFound>
      <Route path="/" element={<RouterLayout />}>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/restorePassword" element={<RestorePassword />} />
        <Route path="/dashboard" element={<DashBoard/>} />
        <Route path="/marketCar" element={<MarketCar />} />
        <Route path="*" element={<div>404</div>} />
      </Route>
    </RoutesNotFound>
  );
};
export default AppRouter;
