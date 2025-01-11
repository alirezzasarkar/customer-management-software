import React, { useState } from "react";
import Login from "../Components/Authentication/Login";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuth } from "../Components/Authentication/AuthContext";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    phone_number: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login: authLogin } = useAuth();

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
      const success = await authLogin(formData);
      if (success) {
        Swal.fire({
          icon: "success",
          title: "ورود موفقیت‌آمیز بود!",
          text: "شما با موفقیت وارد شدید.",
          confirmButtonColor: "#153D8A",
        });
        navigate("/dashboard", { replace: true });
      } else {
        throw new Error("نام کاربری یا رمز عبور اشتباه است.");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "خطا در ورود",
        text: error.message || "خطایی در ورود رخ داده است.",
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
