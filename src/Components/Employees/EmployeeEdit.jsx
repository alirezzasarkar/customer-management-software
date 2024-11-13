import DashboardInputs from "../Common/DashBoardInputs";
import Title from "../Common/Title";
import PersianDatePicker from "../Common/DatePicker";
import DashboardButton from "../Common/DashboardButton";
import ProfileImage from "../Common/ProfileImage";
const EmployeeEdit = () => {
  return (
    <>
      <Title title="ویرایش پروفایل کارمند" />
      <div className="bg-gray-100 p-5 mx-6 rounded-md">
        <form className="flex flex-col gap-7">
          <div className="p-4">
            <ProfileImage upload_text="عکس خود را اپلود کنید" />
          </div>
          <div className="flex justify-between">
            <DashboardInputs
              lable_text="نام و نام خانوادگی"
              placeholder_text="نام و نام خانوادگی خود را وارد کنید"
            />
            <DashboardInputs
              lable_text="سمت شغلی"
              placeholder_text="مدیر پروژه , مدیر فروش , غیره"
              isdisabled={true}
            />
            <DashboardInputs
              lable_text="دپارتمان"
              placeholder_text="فروش پشتیبانی , بازاریابی , غیره"
              isdisabled={true}
            />
          </div>
          <div className="flex justify-between">
            <DashboardInputs
              lable_text="ایمیل (اختیاری)"
              placeholder_text="ایمیل خود را وارد کنید"
            />
            <DashboardInputs
              lable_text="شماره تماس"
              placeholder_text="آیدی خود را وارد کنید"
            />
            <PersianDatePicker label_text="تاریخ استخدام" />
          </div>
          <DashboardInputs
            lable_text="آیدی تلگرام"
            placeholder_text="آیدی خود را وارد کنید"
          />
          <div className="flex justify-center mt-8 mb-2">
            <DashboardButton
              inner_text="ثبت تغییرات "
              icon="/src/Assets/Icons/Tick.svg"
              bg_color="bg-[#13A538]"
              button_type="submit"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default EmployeeEdit;
