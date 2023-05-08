import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import {
  Private,
  Public,
} from "@/pages";
import { AuthGuard, RoutesNotFound } from "@/utils";
import { PrivateRoutes, PublicRoutes } from "./models";
const AppRouter: React.FC<{}> = () => {
  return (
    <RoutesNotFound>
      <Route path="/" element={<Navigate to={PrivateRoutes.PRIVATE} />} />
      <Route path={`${PublicRoutes.PUBLIC}/*`} element={<Public />} />
      <Route element={<AuthGuard privateValidation={true} />}>
        <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
      </Route>
    </RoutesNotFound>
  );
};
export default AppRouter;
