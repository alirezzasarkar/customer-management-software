import React from "react";
import Button from "../Common/AuthButton";
import AuthInput from "../Common/AuthInput";
import AuthLayout from "../Layout/AuthLayout";
import { Link } from "react-router-dom";

const Register = ({ formData, onInputChange, onSubmit, loading }) => {
  return (
    <AuthLayout title="ثبت نام" onSubmit={onSubmit}>
      <AuthInput
        label="نام و نام خانوادگی"
        name="full_name"
        placeholdertext="نام خود را وارد کنید"
        icon="/images/Vector.svg"
        value={formData.full_name}
        onChange={onInputChange}
      />
      <AuthInput
        label="شماره تماس"
        name="phone_number"
        placeholdertext="شماره تلفن خود را وارد کنید"
        icon="/images/smart-phone.svg"
        value={formData.phone_number}
        onChange={onInputChange}
      />
      <AuthInput
        label="ایمیل "
        name="email"
        input_type="email"
        placeholdertext="ایمیل خود را وارد کنید"
        icon="/images/email.svg"
        value={formData.email}
        onChange={onInputChange}
      />
      <AuthInput
        label="رمز عبور"
        name="password"
        placeholdertext="رمز عبور خود را وارد کنید"
        input_type="password"
        icon="/images/lock-password.svg"
        value={formData.password}
        onChange={onInputChange}
      />
      <AuthInput
        label="تکرار رمز عبور"
        name="confirmPassword"
        placeholdertext="رمز عبور خود را وارد کنید"
        input_type="password"
        icon="/images/lock-password.svg"
        value={formData.confirmPassword}
        onChange={onInputChange}
      />
      <Button
        width="w-full"
        textColor="text-[#E1E1EA]"
        height="h-10"
        backgroundColor="bg-[#153D8A]"
        text={loading ? "در حال ثبت‌نام..." : "ثبت نام"}
      />
      <section className="text-center text-sm mt-4">
        <span className="opacity-30 font-semibold"> حساب کاربری دارید؟</span>
        <span className="mx-1 text-[#153D8A] font-bold">
          <Link to="/login">ورود</Link>
        </span>
      </section>
    </AuthLayout>
  );
};

export default Register;
