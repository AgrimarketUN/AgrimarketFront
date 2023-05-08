import { PrivateRoutes, PublicRoutes } from "@/models";
import { Navigate, Outlet } from "react-router-dom";

interface Props {
  privateValidation: boolean;
}

const PrivateValidationFragment = <Outlet />;
const PublicValidationFragment = <Navigate replace to={PrivateRoutes.PRIVATE} />;

export const AuthGuard = () => {
  const token = localStorage.getItem("token");

  return token ? <Outlet /> : <Navigate replace to={PublicRoutes.LOGIN} />;
};

export default AuthGuard;