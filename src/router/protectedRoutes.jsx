import { useLocation } from "react-router";
import { Navigate, Outlet } from "react-router-dom";
import {useSelector} from "react-redux";
const useAuth = () => {
  const loggedIn = useSelector(state => state.user.token);
  return loggedIn;
};

const ProtectedRoutes = () => {
  const location = useLocation();
  const isAuth = useAuth();
  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace state={{ from: location }} />
  );
};

export default ProtectedRoutes;
