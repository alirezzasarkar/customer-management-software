import apiClient from "../Config/AxiosConfig";
import { handleApiError } from "../Handlers/ErrorHandler";

export const getDashboardDetails = async () => {
  try {
    const response = await apiClient.get("/dashboard/");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching sales opportunities:", error);
    handleApiError(error);
    throw error;
  }
};
