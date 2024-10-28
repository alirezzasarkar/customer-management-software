import React, { createContext, useContext, useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import Loading from "../Common/Loading";
import { login } from "../../Services/Authentication/Auth";

const AuthContext = createContext(undefined);

// AuthProvider component to manage user authentication state
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user data from token on initial load
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      try {
        setUser(decodeToken(token));
      } catch (e) {
        console.error("Error decoding token:", e);
        localStorage.removeItem("authToken");
      }
    }
    setLoading(false);
  }, []);

  // Decode JWT token to extract user data (user_id, role)
  const decodeToken = (token) => {
    const decoded = jwtDecode(token);
    return {
      user_id: decoded.user_id,
      role: decoded.role,
    };
  };

  // Login function to authenticate user and store token in local storage
  const login = async (credentials) => {
    try {
      const response = await login(credentials);
      const token = response.access;
      localStorage.setItem("authToken", token);
      setUser(decodeToken(token));
      return true;
    } catch (error) {
      console.error("Login failed:", error);
      return false;
    }
  };

  // Logout function to clear user state and remove token
  const logout = () => {
    setUser(null);
    localStorage.removeItem("authToken");
  };

  // Check if user is authenticated based on user state
  const isAuthenticated = !!user;

  // Check if user has required access based on role
  const hasAccess = (requiredRole) => {
    return user?.role === requiredRole; // Return true if role matches
  };

  // Render loading spinner if still loading
  if (loading) {
    return <Loading />;
  }

  // Provide authentication-related functions and state to children components
  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
        loading,
        hasAccess,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
