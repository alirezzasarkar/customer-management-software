import React, { useState } from "react";
import Login from "../Components/Authentication/Login";
import { login } from "../Services/APIs/Auth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    phone_number: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await login(formData);

      Swal.fire({
        icon: "success",
        title: "ورود موفقیت‌آمیز بود!",
        text: "شما با موفقیت وارد شدید.",
        confirmButtonColor: "#153D8A",
      });

      localStorage.setItem("token", response.access);
      navigate("/dashboard");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "خطا در ورود",
        text: "نام کاربری یا رمز عبور اشتباه است.",
        confirmButtonColor: "#E74C3C",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Login
      formData={formData}
      onInputChange={handleInputChange}
      onSubmit={handleSubmit}
      loading={loading}
    />
  );
};

export default LoginPage;
