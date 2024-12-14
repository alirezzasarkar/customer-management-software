import React from "react";
import { useAuth } from "./AuthContext";

const AccessControl = ({ role, children }) => {
  const { isAuthenticated, hasAccess } = useAuth();

  if (!isAuthenticated || !hasAccess(role)) {
    return <></>;
  }

  return <>{children}</>;
};

export default AccessControl;
