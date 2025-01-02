import React from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { AuthProvider, useAuth } from "./Components/Authentication/AuthContext";
import ForgetPasswordPage from "./pages/ForgetPasswordPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import DashboardRoutes from "./Routes/DashboardRoutes";

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
