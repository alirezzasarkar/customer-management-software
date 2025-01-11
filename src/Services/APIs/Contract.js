import apiClient from "../Config/AxiosConfig";
import { handleApiError } from "../Handlers/ErrorHandler";

export const addFactors = async (payload) => {
  try {
    const formData = new FormData();

    formData.append("costumer", payload.costumer);
    formData.append("price", payload.price);
    formData.append("description", payload.description);

    if (payload.products && payload.products.length > 0) {
      formData.append("products", JSON.stringify(payload.products));
    }

    if (payload.files && payload.files.length > 0) {
      payload.files.forEach((file) => {
        formData.append("files", file);
      });
    }

    const response = await apiClient.post("/factors/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log("Factors Added:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error adding factors:", error);
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
