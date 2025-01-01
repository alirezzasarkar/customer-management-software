import React from "react";
import { Link } from "react-router-dom";
import Button from "../Common/AuthButton";
import AuthInput from "../Common/AuthInput";
import AuthLayout from "../Layout/AuthLayout";

const Login = ({ formData, onInputChange, onSubmit, loading }) => {
  return (
    <AuthLayout title="ورود" onSubmit={onSubmit}>
      <AuthInput
        label="شماره تماس"
        name="phone_number"
        placeholdertext="شماره تلفن خود را وارد کنید"
        input_type="text"
        icon="/src/Assets/Icons/smart-phone.svg"
        value={formData.phone_number}
        onChange={onInputChange}
      />
      <AuthInput
        label="رمز عبور"
        name="password"
        placeholdertext="رمز عبور خود را وارد کنید"
        input_type="password"
        icon="/src/Assets/Icons/lock-password.svg"
        value={formData.password}
        onChange={onInputChange}
      />
      <p className="mt-3 text-[#616161] text-sm font-semibold">
        <Link to="/">رمز عبور را فراموش کرده اید؟</Link>
      </p>
      <Button
        width="w-full"
        textColor="text-[#E1E1EA]"
        height="h-12"
        backgroundColor="bg-[#153D8A]"
        text={loading ? "در حال ورود..." : "وارد شوید"}
      />
    </AuthLayout>
  );
};

export default Login;
