import apiClient from "../Config/AxiosConfig";
import { handleApiError } from "../Handlers/ErrorHandler";

export const getProducts = async () => {
  try {
    const response = await apiClient.get("/products/");
    console.log(response.data);
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
    return response.data;
  } catch (error) {
    console.error("Error fetching product detail:", error);
    handleApiError(error);
    throw error;
  }
};
