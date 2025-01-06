import apiClient from "../Config/AxiosConfig";
import { handleApiError } from "../Handlers/ErrorHandler";

export const addFactors = async (payload) => {
  try {
    const response = await apiClient.post("/factors/", payload);
    console.log("Factors Added:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error adding factors:", error);
    handleApiError(error);
    throw error;
  }
};

export const getFactors = async () => {
  try {
    const response = await apiClient.get("/factors/");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching factors:", error);
    handleApiError(error);
    throw error;
  }
};

export const getFactorById = async (id) => {
  try {
    const response = await apiClient.get(`/factors/${id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching factor details:", error);
    handleApiError(error);
    throw error;
  }
};

export const deleteFactor = async (id) => {
  try {
    const response = await apiClient.delete(`/factors/${id}`);
    console.log("Factor Deleted:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error deleting factor:", error);
    handleApiError(error);
    throw error;
  }
};

export const updateFactor = async (id, payload) => {
  try {
    const response = await apiClient.put(`/factors/${id}`, payload);
    console.log("Factor Updated:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error updating factor:", error);
    handleApiError(error);
    throw error;
  }
};
