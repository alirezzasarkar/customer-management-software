import apiClient from "../Config/AxiosConfig";
import { handleApiError } from "../Handlers/ErrorHandler";

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
