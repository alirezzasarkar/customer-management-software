import apiClient from "../Config/AxiosConfig";
import { handleApiError } from "../Handlers/ErrorHandler";

export const getNotices = async () => {
  try {
    const response = await apiClient.get("/notice/");
    return response.data;
  } catch (error) {
    console.error("Error fetching notices:", error);
    handleApiError(error);
    throw error;
  }
};

export const getNoticeDetail = async (id) => {
  try {
    const response = await apiClient.get(`/notice/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching notice detail:", error);
    handleApiError(error);
    throw error;
  }
};
