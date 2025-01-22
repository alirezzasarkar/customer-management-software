import apiClient from "../Config/AxiosConfig";
import { handleApiError } from "../Handlers/ErrorHandler";

export const addFactors = async (payload) => {
  try {
    const formData = new FormData();

    // افزودن فیلدهای مورد نیاز به FormData
    formData.append("costumer", payload.costumer);
    formData.append("price", payload.price);
    formData.append("description", payload.description);

    // افزودن محصولات به عنوان یک رشته
    formData.append("products", payload.products);

    // افزودن فایل‌ها
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

    "Factors Added:", response.data;
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
