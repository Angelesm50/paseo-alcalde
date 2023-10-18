import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Suspense, lazy } from "react"; // Importa Suspense y lazy de React
import ProtectedRoute from "./ProtectedRoute";
import { useAuth } from "../services/auth/AuthContext";
import { AnimatePresence } from "framer-motion";

const WelcomeScreen = lazy(() => import("../pages/WelcomeScreen"));
const LoginScreen = lazy(() => import("../pages/auth/LoginScreen"));
const RegisterScreen = lazy(() => import("../pages/auth/RegisterScreen"));
const ForgotPasswordScreen = lazy(() => import("../pages/auth/ForgotPasswordScreen"));
const ResetPasswordScreen = lazy(() => import("../pages/auth/ResetPasswordScreen"));
const AppScreen = lazy(() => import("../pages/AppScreen"));
const MapScreen = lazy(() => import("../pages/MapScreen"));
const WhatIsAlcaldeScreen = lazy(() => import("../pages/about/WhatIsAlcaldeScreen"));
const ToursScreen = lazy(() => import("../pages/tours/ToursScreen"));
const MyProfile = lazy(() => import("../pages/profile/MyProfileScreen"));
const TeamScreen = lazy(() => import("../pages/team/TeamScreen"));

const AnimatedRoutes = ({ isVisible }) => {
    const { currentUser } = useAuth();
    const location = useLocation();
    isVisible = true;
    return (
        <AnimatePresence mode={"wait"}>
            <Suspense fallback={<div>Cargando...</div>}>
                <Routes location={location} key={location.pathname}>
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
                        <Route
                            forceRefresh={true}
                            path="/map"
                            element={<MapScreen tipo={"all"} />}
                        />
                        <Route path="/gastronomy" element={<MapScreen tipo="gastronomica" />} />
                        <Route path="/murals" element={<MapScreen tipo="mural" />} />
                        <Route path="/fray" element={<MapScreen tipo="fray" />} />
                        <Route path="/about" element={<WhatIsAlcaldeScreen />} />
                        <Route path="/tours" element={<ToursScreen />} />
                        <Route path="/settings" element={<MyProfile />} />
                        <Route path="/team" element={<TeamScreen />} />
                    </Route>
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </Suspense>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;