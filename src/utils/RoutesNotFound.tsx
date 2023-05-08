import { Route, Routes } from "react-router-dom";

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const RoutesNotFound = ({ children }: Props) => {
  return (
    <Routes>
      {children}
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
};

export default RoutesNotFound;