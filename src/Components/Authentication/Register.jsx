import Button from "../Common/AuthButton";
import AuthInput from "../Common/AuthInput";
import AuthLayout from "../Layout/AuthLayout";

const Register = () => {
  return (
    <>
      <AuthLayout title="ثبت نام">
        <AuthInput
          label="نام و نام خانوادگی"
          placeholdertext="نام خود را وارد کنید"
          icon="/src/Assets/Icons/Vector.svg"
        />
        <AuthInput
          label="شماره تماس"
          placeholdertext="شماره تلفن خود را وارد کنید"
          icon="/src/Assets/Icons/smart-phone.svg"
        />
        <AuthInput
          label="ایمیل (اختیاری)"
          input_type="email"
          placeholdertext="ایمیل خود را وارد کنید"
          icon="/src/Assets/Icons/email.svg"
        />
        <AuthInput
          label="رمز عبور"
          placeholdertext="رمز عبور خود را وارد کنید"
          input_type="password"
          icon="/src/Assets/Icons/lock-password.svg"
        />
        <AuthInput
          label="تکرار رمز عبور"
          placeholdertext="رمز عبور خود را وارد کنید"
          input_type="password"
          icon="/src/Assets/Icons/lock-password.svg"
        />
        <Button
          width="w-full"
          textColor="text-[#E1E1EA]"
          height="h-10"
          backgroundColor="bg-[#153D8A]"
          text="درخواست ثبت نام"
        />
        <section className="text-center text-sm ">
          <span className="opacity-30 font-semibold"> حساب کاربری دارید؟</span>
          <span className="mx-1">
            <a href="" className="text-[#153D8A] font-bold">
              ورود{" "}
            </a>
          </span>
        </section>
      </AuthLayout>
    </>
  );
};

export default Register;
