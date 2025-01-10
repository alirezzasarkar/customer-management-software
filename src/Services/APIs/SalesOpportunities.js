import apiClient from "../Config/AxiosConfig";
import { handleApiError } from "../Handlers/ErrorHandler";

export const addSalesOpportunity = async (data) => {
  try {
    const response = await apiClient.post(
      "/salesopportunities/sales-opportunities/",
      data
    );
    "Sales Opportunity Added:", response.data;
    return response.data;
  } catch (error) {
    console.error("Error adding sales opportunity:", error);
    handleApiError(error);
    throw error;
  }
};

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

export const getSalesOpportunityDetail = async (id) => {
  try {
    const response = await apiClient.get(
      `/salesopportunities/sales-opportunities/${id}`
    );
    response.data;
    return response.data;
  } catch (error) {
    console.error("Error fetching sales opportunity detail:", error);
    handleApiError(error);
    throw error;
  }
};

export const deleteSalesOpportunity = async (id) => {
  try {
    const response = await apiClient.delete(
      `/salesopportunities/sales-opportunities/${id}/`
    );
    "Sales Opportunity Deleted:", response.data;
    return response.data;
  } catch (error) {
    console.error("Error deleting sales opportunity:", error);
    handleApiError(error);
    throw error;
  }
};

export const updateSalesOpportunity = async (id, data) => {
  try {
    const response = await apiClient.put(
      `/salesopportunities/sales-opportunities/${id}/`,
      data
    );
    "Sales Opportunity Updated:", response.data;
    return response.data;
  } catch (error) {
    console.error("Error updating sales opportunity:", error);
    handleApiError(error);
    throw error;
  }
};
