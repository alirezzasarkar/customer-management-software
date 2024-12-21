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

export const getCustomerDetail = async (id) => {
  try {
    const response = await apiClient.get(`/customerprofile/customers/${id}/`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching customer details:", error);
    handleApiError(error);
    throw error;
  }
};

export const getFactorsByCustomer = async (id) => {
  try {
    const response = await apiClient.get(`/factors/?customer=${id}/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching factors:", error);
    handleApiError(error);
    throw error;
  }
};
