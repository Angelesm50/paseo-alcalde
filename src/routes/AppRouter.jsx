import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";

import MapScreen from "../pages/MapScreen";
import AppScreen from "../pages/AppScreen";
import WelcomeScreen from "../pages/WelcomeScreen";
import LoginScreen from "../pages/auth/LoginScreen";
import RegisterScreen from "../pages/auth/RegisterScreen";
import ForgotPasswordScreen from "../pages/auth/ForgotPasswordScreen";
import ResetPasswordScreen from "../pages/auth/ResetPasswordScreen";

import { useAuth } from "../services/auth/AuthContext";
import MyProfile from "../pages/profile/MyProfileScreen";
// import PlaceScreen from "../pages/PlaceScreen";
import WhatIsAlcaldeScreen from "../pages/about/WhatIsAlcaldeScreen";
import TeamScreen from "../pages/team/TeamScreen";
import ToursScreen from "../pages/tours/ToursScreen";

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
            <Route path="/map" element={<MapScreen />} />
            <Route path="/about" element={<WhatIsAlcaldeScreen />} />
            <Route path="/tours" element={<ToursScreen />} />
            <Route path="/settings" element={<MyProfile />} />
            <Route path="/team" element={<TeamScreen />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;
