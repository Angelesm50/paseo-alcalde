import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";

import AppScreen from "../pages/AppScreen";
import LoginScreen from "../pages/LoginScreen";
import RegisterScreen from "../pages/RegisterScreen";
import WelcomeScreen from "../pages/WelcomeScreen";
import ForgotPasswordScreen from "../pages/ForgotPasswordScreen";
import NotFoundScreen from "../pages/NotFoundScreen";
import ResetPasswordScreen from "../pages/ResetPasswordScreen";
import { useAuth } from "../services/auth/AuthContext";

const AppRouter = () => {
  const { currentUser } = useAuth();

  return (
    <>
      <Router>
        <Routes>
          <Route element={<ProtectedRoute user={currentUser} />}>
            <Route end path="/" element={<WelcomeScreen />} />
            <Route end path="/login" element={<LoginScreen />} />
            <Route end path="/register" element={<RegisterScreen />} />
            <Route
              end
              path="/forgot-password"
              element={<ForgotPasswordScreen />}
            />
            <Route
              end
              path="/reset-password"
              element={<ResetPasswordScreen />}
            />
            <Route path="/app" element={<AppScreen />} />
          </Route>
          {/* <Route path="*" element={<Navigate to="/login" />} /> */}
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;
