import Swal from "sweetalert2";
import axios from "axios";

export const handleApiError = (error) => {
  let title = "خطا";
  let message = "خطای ناشناخته";

  if (axios.isAxiosError(error)) {
    const axiosError = error;

    if (axiosError.response) {
      switch (axiosError.response.status) {
        case 400:
          title = "خطای درخواست";

        case 401:
          title = "عدم مجوز";
          message =
            axiosError.response.data?.message ||
            "شما مجاز به انجام این عملیات نیستید.";
          break;

        case 403:
          title = "دسترسی ممنوع";
          message =
            axiosError.response.data?.message ||
            "دسترسی شما به این منبع مسدود شده است.";
          break;

        case 404:
          title = "یافت نشد";
          message =
            axiosError.response.data?.message || "منبع درخواستی یافت نشد.";
          break;

        case 500:
          title = "خطای سرور";
          message =
            axiosError.response.data?.message || "مشکلی در سرور رخ داده است.";
          break;

        default:
          title = "خطا";
          message = axiosError.response.data?.message || "یک خطا رخ داده است.";
          break;
      }
    } else {
      title = "خطا";
      message = "پاسخی از سرور دریافت نشد.";
    }
  } else if (error instanceof Error) {
    title = "خطا";
    message = error.message || "یک خطا رخ داده است.";
  }

  Swal.fire({
    title,
    text: message,
    icon: "error",
    confirmButtonText: "باشه",
    confirmButtonColor: "#f87171",
  });
};
