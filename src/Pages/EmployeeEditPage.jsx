// src/Pages/EmployeeEditPage.jsx

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { getEmployeeDetail, updateEmployee } from "../Services/APIs/Employees";
import EmployeeEdit from "../Components/Employees/EmployeeEdit";
import Loading from "./../Components/Common/Loading";

const EmployeeEditPage = () => {
  const { id } = useParams(); // دریافت شناسه کارمند از URL
  const navigate = useNavigate(); // برای هدایت بعد از موفقیت‌آمیز بودن به‌روزرسانی
  const [formData, setFormData] = useState({
    fullName: "",
    jobTitle: "",
    department: "",
    email: "",
    phoneNumber: "",
    hireDate: "",
    telegramId: "",
    profilePicture: null, // فایل جدید
    profilePictureUrl: "", // URL تصویر فعلی
    password: "",
    confirmPassword: "",
  });
  const [jobTitles, setJobTitles] = useState([
    { value: "admin", name: "مدیر مجموعه" },
    { value: "system_manager", name: "مدیر سامانه" },
    { value: "accountant", name: "حسابدار" },
    { value: "regular", name: "کاربر عادی" },
  ]);
  const [loading, setLoading] = useState(true); // برای مدیریت وضعیت بارگذاری

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const employeeData = await getEmployeeDetail(id);

        setFormData({
          user: employeeData.user,
          fullName: employeeData.full_name || "",
          jobTitle: employeeData.work_position || "",
          department: employeeData.department || "",
          email: employeeData.email || "",
          phoneNumber: employeeData.phone_number || "",
          hireDate: employeeData.date_of_assignment
            ? new Date(employeeData.date_of_assignment)
                .toISOString()
                .split("T")[0]
            : "",
          telegramId: employeeData.telegram_id || "",
          profilePicture: null, // فایل جدید هنوز آپلود نشده
          profilePictureUrl: employeeData.picture || "", // URL تصویر فعلی
          password: "",
          confirmPassword: "",
        });

        setLoading(false);
      } catch (error) {
        console.error("Error fetching employee data:", error);
        Swal.fire({
          icon: "error",
          title: "خطا",
          text: "مشکلی در واکشی داده‌های کارمند وجود داشت.",
        });
        setLoading(false);
      }
    };

    fetchEmployee();
  }, [id]);

  const handleInputChange = (field, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleJobTitleChange = (job) => {
    setFormData((prevState) => ({
      ...prevState,
      jobTitle: job.value,
    }));
  };

  const handleProfilePictureUpload = (file) => {
    setFormData((prevState) => ({
      ...prevState,
      profilePicture: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // بررسی تطابق رمز عبور و تکرار آن (اگر رمز عبور خالی نیست)
    if (formData.password || formData.confirmPassword) {
      if (formData.password !== formData.confirmPassword) {
        Swal.fire({
          icon: "error",
          title: "خطا",
          text: "رمز عبور و تکرار آن مطابقت ندارند.",
        });
        return;
      }
    }

    // ایجاد FormData
    const formPayload = new FormData();
    if (formData.profilePicture) {
      formPayload.append("picture", formData.profilePicture); // ارسال فایل
    }
    formPayload.append("user", formData.user);
    formPayload.append("full_name", formData.fullName);
    formPayload.append("email", formData.email);
    formPayload.append("phone_number", formData.phoneNumber);
    formPayload.append("telegram_id", formData.telegramId);
    formPayload.append("work_position", formData.jobTitle);
    formPayload.append("department", formData.department);
    formPayload.append(
      "date_of_assignment",
      formData.hireDate ? new Date(formData.hireDate).toISOString() : ""
    );

    if (formData.password) {
      formPayload.append("password", formData.password);
    }

    try {
      await updateEmployee(id, formPayload); // ارسال FormData به API
      Swal.fire({
        icon: "success",
        title: "ویرایش موفق!",
        text: "پروفایل کارمند با موفقیت به‌روزرسانی شد.",
      }).then(() => {
        navigate("/dashboard/employees/list"); // هدایت به صفحه لیست کارمندان پس از موفقیت
      });
    } catch (error) {
      console.error("Error updating employee profile:", error);
      const errorResponse = error.response?.data;

      let errorMsg = "مشکلی در به‌روزرسانی پروفایل کارمند وجود داشت.";
      if (errorResponse) {
        const errors = Object.entries(errorResponse).map(
          ([key, value]) => `${key}: ${value.join(", ")}`
        );
        errorMsg = errors.join("\n");
      }

      Swal.fire({
        icon: "error",
        title: "خطا",
        text: errorMsg,
      });
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <EmployeeEdit
      formData={formData}
      jobTitles={jobTitles}
      onInputChange={handleInputChange}
      onJobTitleChange={handleJobTitleChange}
      onProfilePictureUpload={handleProfilePictureUpload}
      onSubmit={handleSubmit}
    />
  );
};

export default EmployeeEditPage;
