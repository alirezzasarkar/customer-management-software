import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import ForgetPasswordPage from "./pages/ForgetPasswordPage";
import DashboardRoutes from "./Routes/DashboardRoutes";
import { AuthProvider, useAuth } from "./Components/Authentication/AuthContext";

const App = () => {
  const { user } = useAuth();

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              user ? (
                <Navigate to="/dashboard" replace />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forget-password" element={<ForgetPasswordPage />} />

          <Route
            path="/dashboard/*"
            element={
              user ? <DashboardRoutes /> : <Navigate to="/login" replace />
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
