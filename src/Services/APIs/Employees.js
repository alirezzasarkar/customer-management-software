import apiClient from "../Config/AxiosConfig";
import { handleApiError } from "../Handlers/ErrorHandler";

export const addEmployees = async (payload) => {
  try {
    const response = await apiClient.post(
      "/accountemployee/create-user/",
      payload
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching employee list:", error);
    handleApiError(error);
    throw error;
  }
};

export const getEmployees = async () => {
  try {
    const response = await apiClient.get("/accountemployee/profiles/");
    return response.data;
  } catch (error) {
    console.error("Error fetching employee list:", error);
    handleApiError(error);
    throw error;
  }
};

export const getEmployeeDetail = async (id) => {
  try {
    const response = await apiClient.get(`/accountemployee/profiles/${id}/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching employee detail:", error);
    handleApiError(error);
    throw error;
  }
};

export const deleteEmployee = async (id) => {
  try {
    const response = await apiClient.delete(`/accountemployee/profiles/${id}/`);
    return response.data;
  } catch (error) {
    console.error("Error deleting employee:", error);
    handleApiError(error);
    throw error;
  }
};

export const updateEmployee = async (id, payload) => {
  try {
    const response = await apiClient.put(
      `/accountemployee/profiles/${id}/`,
      payload
    );
    return response.data;
  } catch (error) {
    console.error("Error updating employee:", error);
    handleApiError(error);
    throw error;
  }
};
