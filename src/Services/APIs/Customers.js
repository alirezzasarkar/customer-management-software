import apiClient from "../Config/AxiosConfig";
import { handleApiError } from "../Handlers/ErrorHandler";

export const getCustomers = async () => {
  try {
    const response = await apiClient.get("/customerprofile/customers/");
    return response.data;
  } catch (error) {
    console.error("Error fetching customers:", error);
    handleApiError(error);
    throw error;
  }
};
