import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import ProtectedRoute from "../routes/ProtectedRoute";
import WelcomeScreen from "../pages/WelcomeScreen";
import LoginScreen from "../pages/auth/LoginScreen";
import RegisterScreen from "../pages/auth/RegisterScreen";
import ForgotPasswordScreen from "../pages/auth/ForgotPasswordScreen";
import ResetPasswordScreen from "../pages/auth/ResetPasswordScreen";
import AppScreen from "../pages/AppScreen";
import MapScreen from "../pages/MapScreen";
import WhatIsAlcaldeScreen from "../pages/about/WhatIsAlcaldeScreen";
import ToursScreen from "../pages/tours/ToursScreen";
import MyProfile from "../pages/profile/MyProfileScreen";
import TeamScreen from "../pages/team/TeamScreen";
import {useAuth} from "../services/auth/AuthContext";
import {AnimatePresence} from "framer-motion";

const AnimatedRoutes = () => {
    const { currentUser } = useAuth();
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route element={<ProtectedRoute user={currentUser}/>}>
                    <Route end path="/" element={<WelcomeScreen/>}/>
                    <Route end path="/login" element={<LoginScreen/>}/>
                    <Route end path="/register" element={<RegisterScreen/>}/>
                    <Route
                        end
                        path="/forgot-password"
                        element={<ForgotPasswordScreen/>}
                    />
                    <Route
                        end
                        path="/reset-password"
                        element={<ResetPasswordScreen/>}
                    />
                    <Route path="/app" element={<AppScreen/>}/>
                    <Route forceRefresh={true} path="/map" element={<MapScreen/>}/>
                    <Route path="/about" element={<WhatIsAlcaldeScreen/>}/>
                    <Route path="/tours" element={<ToursScreen/>}/>
                    <Route path="/settings" element={<MyProfile/>}/>
                    <Route path="/team" element={<TeamScreen/>}/>
                </Route>
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;