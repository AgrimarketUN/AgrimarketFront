import { PrivateRoutes } from "@/models";
import { Navigate, Route } from "react-router-dom";
import DashBoard from "./DashBoard/DashBoard";
import MarketCar from "./ShoppingCart/ShoppingCart";
import { RoutesNotFound } from "@/components";

function Private() {
  return (
    <RoutesNotFound>
      <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
      <Route path={PrivateRoutes.DASHBOARD} element={<DashBoard />} />
      <Route path={PrivateRoutes.MARKETCAR} element={<MarketCar />} />
    </RoutesNotFound>
  );
}

export default Private;