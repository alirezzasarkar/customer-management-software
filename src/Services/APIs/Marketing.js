import apiClient from "../Config/AxiosConfig";
import { handleApiError } from "../Handlers/ErrorHandler";

export const addMarketingCampaigns = async (payload) => {
  try {
    const response = await apiClient.post("/marketing/", payload);
    return response.data;
  } catch (error) {
    console.error("Error adding marketing campaigns:", error);
    handleApiError(error);
    throw error;
  }
};

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

export const getMarketingCampaignDetail = async (id) => {
  try {
    const response = await apiClient.get(`/marketing/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching marketing campaign detail:", error);
    handleApiError(error);
    throw error;
  }
};

export const deleteMarketingCampaign = async (id) => {
  try {
    const response = await apiClient.delete(`/marketing/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting marketing campaign:", error);
    handleApiError(error);
    throw error;
  }
};

export const updateMarketingCampaign = async (id, payload) => {
  try {
    const response = await apiClient.put(`/marketing/${id}`, payload);
    return response.data;
  } catch (error) {
    console.error("Error updating marketing campaign:", error);
    handleApiError(error);
    throw error;
  }
};
