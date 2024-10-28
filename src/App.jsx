import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// import { AuthProvider, useAuth } from "./Components/Authentication/AuthContext";
import LoginPage from "./pages/LoginPage";
import ForgetPasswordPage from "./pages/ForgetPasswordPage";
import DashboardRoutes from "./Routes/DashboardRoutes";

const App = () => {
  // const { user } = useAuth();

  return (
    // <AuthProvider>
    //   <Router>
    //     <Routes>
    //       <Route
    //         path="/"
    //         element={
    //           user ? (
    //             <Navigate to="/dashboard" replace />
    //           ) : (
    //             <Navigate to="/login" replace />
    //           )
    //         }
    //       />
    //       <Route path="/login" element={<LoginPage />} />
    //       <Route path="/forget-password" element={<ForgetPasswordPage />} />

    //       {/* Protected Route for Dashboard */}

    //       <Route
    //         path="/dashboard/*"
    //         element={
    //           user ? <DashboardRoutes /> : <Navigate to="/login" replace />
    //         }
    //       />
    //     </Routes>
    //   </Router>
    // </AuthProvider>
    <>
      <LoginPage />
    </>
  );
};

export default App;
