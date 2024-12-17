import apiClient from "../Config/AxiosConfig";
import { handleApiError } from "../Handlers/ErrorHandler";

export const getMarketingCampaigns = async () => {
  try {
    const response = await apiClient.get("/marketing/");
    return response.data;
  } catch (error) {
    console.error("Error fetching marketing campaigns:", error);
    handleApiError(error);
    throw error;
  }
};
