import Button from "../Common/AuthButton";
import AuthInput from "../Common/AuthInput";
import AuthLayout from "../Layout/AuthLayout";

const Login = () => {
  return (
    <AuthLayout title="ورود">
      <AuthInput
        label="شماره تماس"
        placeholdertext="شماره تلفن خود را وارد کنید"
        input_type="text"
        icon="/src/Assets/Icons/smart-phone.svg"
      />
      <AuthInput
        label="رمز عبور"
        placeholdertext="رمز عبور خود را وارد کنید"
        input_type="password"
        icon="/src/Assets/Icons/lock-password.svg"
      />
      <a href="/forgetpass">
        <p className="mt-3 text-[#616161] text-sm font-semibold">
          رمز عبور را فراموش کرده اید؟
        </p>
      </a>
      <Button
        width="w-full"
        textColor="text-[#E1E1EA]"
        height="h-12"
        backgroundColor="bg-[#153D8A]"
        text="وارد شوید"
      />
      <section className="text-center text-sm ">
        <span className="opacity-30 font-semibold"> حساب کاربری ندارید؟</span>
        <span>
          <a href="/signup" className="text-[#153D8A] font-bold">
            ثبت نام کنید
          </a>
        </span>
      </section>
    </AuthLayout>
  );
};

export default Login;
