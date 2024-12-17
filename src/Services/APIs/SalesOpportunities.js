import apiClient from "../Config/AxiosConfig";
import { handleApiError } from "../Handlers/ErrorHandler";

export const getSalesOpportunities = async () => {
  try {
    const response = await apiClient.get(
      "/salesopportunities/sales-opportunities/"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching sales opportunities:", error);
    handleApiError(error);
    throw error;
  }
};
