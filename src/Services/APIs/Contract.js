import apiClient from "../Config/AxiosConfig";
import { handleApiError } from "../Handlers/ErrorHandler";

export const getFactors = async () => {
  try {
    const response = await apiClient.get("/factors/");
    return response.data;
  } catch (error) {
    console.error("Error fetching factors:", error);
    handleApiError(error);
    throw error;
  }
};
