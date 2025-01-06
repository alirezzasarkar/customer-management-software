// src/Pages/CustomersEditPage.jsx

import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { getCustomerDetail, updateCustomer } from "../Services/APIs/Customers";
import CustomersEdit from "./../Components/Customers/CustomersEdit";
import Loading from "./../Components/Common/Loading";
import { useNavigate, useParams } from "react-router-dom";

const CustomersEditPage = () => {
  const { id } = useParams(); // دریافت شناسه مشتری از URL
  const navigate = useNavigate(); // برای هدایت بعد از موفقیت‌آمیز بودن به‌روزرسانی
  const [formData, setFormData] = useState({
    full_name: "",
    national_id: "",
    email: "",
    phone: "",
    birth_date: "",
    instagram: "",
    telegram: "",
    customer_picture: null, // فایل جدید
    customer_picture_url: "", // URL تصویر فعلی
    buyer_rank: "", // فرض بر این است که این فیلد نیاز است
  });
  const [loading, setLoading] = useState(true); // برای مدیریت وضعیت بارگذاری

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const customerData = await getCustomerDetail(id);

        setFormData({
          full_name: customerData.full_name || "",
          national_id: customerData.national_id || "",
          email: customerData.email || "",
          phone: customerData.phone_number || "",
          birth_date: customerData.date_of_birth
            ? new Date(customerData.date_of_birth).toISOString().split("T")[0]
            : "",
          instagram: customerData.instagram_id || "",
          telegram: customerData.telegram_id || "",
          customer_picture: null, // فایل جدید هنوز آپلود نشده
          customer_picture_url: customerData.customer_picture || "", // URL تصویر فعلی
          buyer_rank: customerData.buyer_rank || "", // مقداردهی اولیه buyer_rank
        });

        setLoading(false);
      } catch (error) {
        console.error("Error fetching customer data:", error);
        Swal.fire({
          icon: "error",
          title: "خطا",
          text: "مشکلی در واکشی داده‌های مشتری وجود داشت.",
        });
        setLoading(false);
      }
    };

    fetchCustomer();
  }, [id]);

  const handleInputChange = (field, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleProfilePictureUpload = (file) => {
    setFormData((prevState) => ({
      ...prevState,
      customer_picture: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ایجاد FormData
    const formPayload = new FormData();
    if (formData.customer_picture) {
      formPayload.append("customer_picture", formData.customer_picture); // ارسال فایل
    }
    formPayload.append("full_name", formData.full_name);
    formPayload.append("national_id", formData.national_id);
    formPayload.append("email", formData.email);
    formPayload.append("phone_number", formData.phone);
    formPayload.append(
      "date_of_birth",
      formData.birth_date
        ? new Date(formData.birth_date).toISOString().split("T")[0]
        : ""
    );
    formPayload.append("instagram_id", formData.instagram);
    formPayload.append("telegram_id", formData.telegram);
    formPayload.append("buyer_rank", formData.buyer_rank);

    try {
      await updateCustomer(id, formPayload); // ارسال FormData به API
      Swal.fire({
        icon: "success",
        title: "ویرایش موفق!",
        text: "پروفایل مشتری با موفقیت به‌روزرسانی شد.",
      }).then(() => {
        navigate("/dashboard/customers/list"); // هدایت به صفحه لیست مشتریان پس از موفقیت
      });
    } catch (error) {
      console.error("Error updating customer profile:", error);
      const errorResponse = error.response?.data;

      let errorMsg = "مشکلی در به‌روزرسانی پروفایل مشتری وجود داشت.";
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
    <CustomersEdit
      formData={formData}
      onInputChange={handleInputChange}
      onSubmit={handleSubmit}
      onProfilePictureUpload={handleProfilePictureUpload}
    />
  );
};

export default CustomersEditPage;
