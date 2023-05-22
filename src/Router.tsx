import React from "react";
import { Route } from "react-router-dom";
import { RouterLayout } from "./common";
import { ForgotPassword, Login, SignUp, ShoppingCart, DashBoard, RestorePassword, InfoProduct, ProfileUser, UpdateProfileUser, Purchase } from "@/pages";
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
        <Route path="/shoppingCart" element={<ShoppingCart />} />
        <Route path="/product/:id" element={<InfoProduct />} />
        <Route path="/profile" element={<ProfileUser/>}/>
        <Route path="/updateProfile" element={<UpdateProfileUser/>}/>
        <Route path="/purchase" element={<Purchase/>}/>
      </Route>
    </RoutesNotFound>
  );
};
export default AppRouter;
