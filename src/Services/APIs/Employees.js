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
