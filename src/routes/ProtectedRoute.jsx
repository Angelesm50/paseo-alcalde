import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../services/auth/AuthContext";

export default function ProtectedRoute(props) {
  const { currentUser } = useAuth();
  const { pathname, state } = useLocation();

  if (
    pathname === "/" ||
    pathname === "/login" ||
    pathname === "/register" ||
    pathname === "/forgot-password" ||
    pathname === "/reset-password"
  ) {
    return currentUser ? (
      <Navigate to={state?.from ?? "/app"} />
    ) : (
      <Outlet {...props} />
    );
  }
  return currentUser ? (
    <Outlet {...props} />
  ) : (
    <Navigate to="/login" state={{ from: pathname }} />
  );
}
