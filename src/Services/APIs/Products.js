import apiClient from "../Config/AxiosConfig";
import { handleApiError } from "../Handlers/ErrorHandler";

export const getProducts = async () => {
  try {
    const response = await apiClient.get("/products/");
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    handleApiError(error);
    throw error;
  }
};
