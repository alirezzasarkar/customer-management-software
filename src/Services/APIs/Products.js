import apiClient from "../Config/AxiosConfig";
import { handleApiError } from "../Handlers/ErrorHandler";

export const addProducts = async (payload) => {
  try {
    const response = await apiClient.post("/products/", payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(response.data);
    response.data;
    return response.data;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
};
export const getProducts = async () => {
  try {
    const response = await apiClient.get("/products/");
    response.data;
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    handleApiError(error);
    throw error;
  }
};

export const getCategory = async () => {
  try {
    const response = await apiClient.get("/products/category");
    response.data;
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    handleApiError(error);
    throw error;
  }
};

export const getProductDetail = async (id) => {
  try {
    const response = await apiClient.get(`/products/${id}`);
    response.data;
    return response.data;
  } catch (error) {
    console.error("Error fetching product detail:", error);
    handleApiError(error);
    throw error;
  }
};

export const updateProduct = async (product_id, payload) => {
  try {
    const response = await apiClient.patch(`/products/${product_id}/`, payload);
    response.data;
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("API Response Error:", error.response.data);
    } else if (error.request) {
      console.error("No response received:", error.request);
    } else {
      console.error("Error setting up request:", error.message);
    }
    throw error;
  }
};

export const DeleteProduct = async (product_id, payload) => {
  try {
    const response = await apiClient.delete(`/products/${product_id}`, payload);
    response.data;
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("API Response Error:", error.response.data);
    } else if (error.request) {
      console.error("No response received:", error.request);
    } else {
      console.error("Error setting up request:", error.message);
    }
    throw error;
  }
};
