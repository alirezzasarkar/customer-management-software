import apiClient from "../Config/AxiosConfig";
import { handleApiError } from "../Handlers/ErrorHandler";

export const addCustomers = async (payload) => {
  try {
    const response = await apiClient.post(
      "/customerprofile/customers/",
      payload
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching customers:", error);
    handleApiError(error);
    throw error;
  }
};

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

export const deleteCustomer = async (id) => {
  try {
    const response = await apiClient.delete(
      `/customerprofile/customers/${id}/`
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting customer:", error);
    handleApiError(error);
    throw error;
  }
};

export const updateCustomer = async (id, payload) => {
  try {
    const response = await apiClient.put(
      `/customerprofile/customers/${id}/`,
      payload
    );
    return response.data;
  } catch (error) {
    console.error("Error updating customer:", error);
    handleApiError(error);
    throw error;
  }
};
