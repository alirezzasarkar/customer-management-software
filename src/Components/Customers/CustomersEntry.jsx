import DashboardButton from "../Common/DashboardButton";
import DashboardInputs from "../Common/DashBoardInputs";
import PersianDatePicker from "../Common/DatePicker";
import ProfileImage from "../Common/ProfileImage";
import Title from "../Common/Title";

const CustomersEntry = () => {
  return (
    <div>
      <Title title=" وارد کردن پروفایل مشتریان" />
      <div className="bg-gray-100 p-5 sm:mx-6 rounded-md ">
        <form className="flex flex-col gap-7">
          <div className="p-4">
            <ProfileImage upload_text="عکس خود را اپلود کنید" />
          </div>
          <div className="flex flex-col sm:flex-row justify-between gap-7">
            <DashboardInputs
              lable_text="نام و نام خانوادگی"
              placeholder_text="نام و نام خانوادگی خود را وارد کنید"
            />
            <DashboardInputs
              lable_text="کد ملی"
              placeholder_text="کد ملی خود را وارد کنید"
            />
            <DashboardInputs
              lable_text="ایمیل (اختیاری)"
              placeholder_text="ایمیل خود را وارد کنید"
            />
          </div>
          <div className="flex flex-col sm:flex-row justify-between gap-7">
            <DashboardInputs
              lable_text="شماره تماس"
              placeholder_text="شماره تماس خود را وارد کنید"
            />
            <PersianDatePicker label_text="تاریخ تولد" />
            <DashboardInputs
              lable_text="آیدی اینستاگرام"
              placeholder_text="آیدی خود را وارد کنید"
            />
          </div>
          <DashboardInputs
            lable_text="آیدی تلگرام"
            placeholder_text="آیدی خود را وارد کنید"
          />
          <div className="flex justify-center mt-8 mb-2">
            <DashboardButton
              inner_text="ثبت اطلاعات "
              icon="/src/Assets/Icons/Tick.svg"
              bg_color="bg-[#13A538]"
              button_type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomersEntry;
