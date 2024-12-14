import React, { useState } from "react";
import Register from "../Components/Authentication/Register";
import { register } from "../Services/APIs/Auth";
import Swal from "sweetalert2";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    phone_number: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "خطا",
        text: "رمز عبور و تکرار آن یکسان نیستند.",
      });
      return;
    }

    setLoading(true);

    try {
      await register({
        full_name: formData.full_name,
        phone_number: formData.phone_number,
        email: formData.email,
        password: formData.password,
      });

      Swal.fire({
        icon: "success",
        title: "موفقیت",
        text: "ثبت‌نام با موفقیت انجام شد! لطفاً وارد شوید.",
      });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "خطا",
        text: "مشکلی در ثبت‌نام وجود دارد. لطفاً دوباره تلاش کنید.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Register
        formData={formData}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
        loading={loading}
      />
    </div>
  );
};

export default RegisterPage;
