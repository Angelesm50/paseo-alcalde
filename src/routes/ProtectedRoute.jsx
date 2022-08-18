import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../services/auth/AuthContext";

export default function ProtectedRoute(props) {
  const { currentUser } = useAuth();
  const { pathname, state } = useLocation();

  const paths = [
    "/",
    "/login",
    "/register",
    "/forgot-password",
    "/reset-password",
  ];

  if (paths.includes(pathname)) {
    return currentUser ? (
      <Navigate to={state?.from ?? "/app"} />
    ) : (
      <Outlet {...props} />
    );
  }

  return currentUser ? (
    <Outlet {...props} />
  ) : (
    <Navigate to="/welcome" state={{ from: pathname }} />
  );
}
