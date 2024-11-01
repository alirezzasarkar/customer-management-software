import Button from "../Common/AuthButton";
import AuthInput from "../Common/AuthInput";

const Login = () => {
  return (
    <main className="flex md:flex-row flex-col justify-evenly items-center h-screen bg-[#F1F1F9]">
      <form className="space-y-7 md:w-[23%]">
        <h1 className="text-center font-bold text-5xl mb-14 text-[#424242]">
          ورود
        </h1>
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
        <a href="">
          <p className="mt-3 text-[#616161] text-sm font-semibold">
            رمز عبور را فراموش کرده اید؟
          </p>
        </a>
        <Button
          width="w-full"
          textColor="text-[#E1E1EA]"
          height="h-10"
          backgroundColor="bg-[#153D8A]"
          text="وارد شوید"
        />
        <section className="text-center text-sm ">
          <span className="opacity-30 font-semibold"> حساب کاربری ندارید؟</span>
          <span>
            <a href="" className="text-[#153D8A] font-bold">
              ثبت نام کنید
            </a>
          </span>
        </section>
      </form>

      <div
        className="relative h-full w-[30%] bg-cover"
        style={{
          backgroundImage: "url('/src/Assets/Icons/Blue_Background.svg')",
        }}
      >
        <img
          src="/src/Assets/Icons/AdklayLogo.svg"
          alt="AdklayLogo"
          className="absolute inset-9 m-auto"
        />
      </div>
    </main>
  );
};

export default Login;
