import React from "react";
import AuthLayout from "../Layout/AuthLayout";
import AuthInput from "../Common/AuthInput";
import Button from "../Common/AuthButton";

const ResetPassword = () => {
  return (
    <AuthLayout title="رمز عبور جدید">
      <AuthInput
        label="رمز عبور جدید"
        placeholdertext="رمز عبور خود را وارد کنید"
        input_type="password"
        icon="/src/Assets/Icons/lock-password.svg"
      />
      <AuthInput
        label="تکرار رمز عبور جدید"
        placeholdertext="تکرار رمز عبور"
        input_type="password"
        icon="/src/Assets/Icons/lock-password.svg"
      />
      <Button
        width="w-full"
        textColor="text-[#E1E1EA]"
        height="h-10"
        backgroundColor="bg-[#153D8A]"
        text="وارد شوید"
      />
    </AuthLayout>
  );
};

export default ResetPassword;
