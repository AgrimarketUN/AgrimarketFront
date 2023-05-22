import { PublicRoutes } from "@/models";
import { Navigate, Route } from "react-router-dom";
import { ForgotPassword, Login, RestorePassword, SignUp } from "..";
import { RoutesNotFound } from "@/components";

function Public() {
  return (
    <RoutesNotFound>
      <Route path="/" element={<Navigate to={PublicRoutes.LOGIN} />} />
      <Route path={PublicRoutes.LOGIN} element={<Login />} />
      <Route path={PublicRoutes.SIGNUP} element={<SignUp />} />
      <Route path={PublicRoutes.FORGOTPASSWORD} element={<ForgotPassword />} />
      <Route path={PublicRoutes.RESTOREPASSWORD} element={<RestorePassword />} />
    </RoutesNotFound>
  );
}

export default Public;  