import axios from "axios";
import API_URL from "../Config/ApiConfig";
import { handleApiError } from "../Handlers/ErrorHandler";

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

// Register function
export const register = async (data) => {
  try {
    const response = await axios.post(
      `${API_URL}/accountemployee/create-user/`,
      data
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
};
