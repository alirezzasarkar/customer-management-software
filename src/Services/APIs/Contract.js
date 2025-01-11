import apiClient from "../Config/AxiosConfig";
import { handleApiError } from "../Handlers/ErrorHandler";

export const addFactors = async (payload) => {
  try {
    const response = await apiClient.post("/factors/", payload);
    "Factors Added:", response.data;
    console.log(response.data);
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
    response.data;
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
    response.data;
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
    "Factor Deleted:", response.data;
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
    "Factor Updated:", response.data;
    return response.data;
  } catch (error) {
    console.error("Error updating factor:", error);
    handleApiError(error);
    throw error;
  }
};
