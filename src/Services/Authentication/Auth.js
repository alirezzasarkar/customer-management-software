import axios from "axios";
import API_URL from "./apiConfig";
import { handleApiError } from "./errorHandler";

// Login function
export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/account/login/`, credentials);
    return response.data;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
};
