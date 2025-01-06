import apiClient from "../Config/AxiosConfig";
import { handleApiError } from "../Handlers/ErrorHandler";

export const addEmployees = async (payload) => {
  try {
    const response = await apiClient.post(
      "/accountemployee/create-user/",
      payload
    );
    console.log("Employee Response:", response);
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
    console.log(response.data);

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
    const response = await apiClient.delete(
      `/customerprofile/customers/${id}/`
    );
    console.log("Delete Response:", response);
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
    console.log("Employee Updated:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error updating employee:", error);
    handleApiError(error);
    throw error;
  }
};
