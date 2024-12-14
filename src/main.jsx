import { createRoot } from "react-dom/client";
import { AuthProvider } from "./Components/Authentication/AuthContext";

import App from "./App";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
