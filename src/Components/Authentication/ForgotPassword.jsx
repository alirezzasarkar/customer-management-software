// import React from "react";
import AuthLayout from "../Layout/AuthLayout";
import AuthInput from "../Common/AuthInput";
import Button from "../Common/AuthButton";

const ForgotPassword = () => {
  return (
    <AuthLayout title="فراموشی رمز عبور">
      <AuthInput
        label="شماره تماس"
        placeholdertext="شماره تلفن خود را وارد کنید"
        input_type="text"
        icon="/src/Assets/Icons/smart-phone.svg"
        verification="verfication-button"
      />
      <AuthInput
        label="کد تایید"
        placeholdertext="کد تایید خود را وارد کنید"
        input_type="password"
        icon="/src/Assets/Icons/shield.svg"
      />
      <Button
        width="w-full"
        textColor="text-[#E1E1EA]"
        height="h-10"
        backgroundColor="bg-[#153D8A]"
        text="رمز عبور جدید"
      />
    </AuthLayout>
  );
};

export default ForgotPassword;
