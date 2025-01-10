import axios from "axios";
import API_URL from "../Config/ApiConfig";
import apiClient from "./../Config/AxiosConfig";
import { handleApiError } from "../Handlers/ErrorHandler";

export const login = async (credentials) => {
  try {
    const response = await axios.post(
      `${API_URL}/accountemployee/employee-login/`,
      credentials
    );
    response.data;
    return response.data;
  } catch (error) {
    console.error("Login error:", error.response);
    throw error;
  }
};

export const register = async (data) => {
  try {
    const response = await apiClient.post(
      "/accountemployee/create-user/",
      data
    );
    response.data;
    return response.data;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
};
