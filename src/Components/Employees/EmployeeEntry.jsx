import DashboardButton from "../Common/DashboardButton";
import DashboardInputs from "../Common/DashBoardInputs";
import PersianDatePicker from "../Common/DatePicker";
import ProfileImage from "../Common/ProfileImage";
import Title from "../Common/Title";
import DashboardDropDown from "../Common/DashboardDropDown";

const EmployeeEntry = ({
  formData,
  jobTitles,
  onInputChange,
  onJobTitleChange,
  onProfilePictureUpload,
  onSubmit,
}) => {
  return (
    <>
      <Title title="وارد کردن پروفایل کارمند" />
      <div className="bg-gray-100 p-5 mx-6 rounded-md">
        <form className="flex flex-col gap-7" onSubmit={onSubmit}>
          <div className="p-4">
            <ProfileImage
              upload_text="عکس خود را اپلود کنید"
              onUpload={onProfilePictureUpload}
            />
          </div>
          <div className="flex justify-between">
            <DashboardInputs
              lable_text="نام و نام خانوادگی"
              placeholder_text="نام و نام خانوادگی خود را وارد کنید"
              value={formData.fullName}
              onChange={(e) => onInputChange("fullName", e.target.value)}
            />
            <DashboardDropDown
              label_text="سمت شغلی"
              items={jobTitles}
              onSelect={onJobTitleChange}
              selectedItem={jobTitles.find(
                (job) => job.value === formData.jobTitle
              )}
            />
            <DashboardInputs
              lable_text="دپارتمان"
              placeholder_text="فروش پشتیبانی , بازاریابی , غیره"
              value={formData.department}
              onChange={(e) => onInputChange("department", e.target.value)}
            />
          </div>
          <div className="flex justify-between">
            <DashboardInputs
              lable_text="ایمیل (اختیاری)"
              placeholder_text="ایمیل خود را وارد کنید"
              value={formData.email}
              onChange={(e) => onInputChange("email", e.target.value)}
            />
            <DashboardInputs
              lable_text="شماره تماس"
              placeholder_text="شماره تماس خود را وارد کنید"
              value={formData.phoneNumber}
              onChange={(e) => onInputChange("phoneNumber", e.target.value)}
            />
            <PersianDatePicker
              onChange={(date) => onInputChange("hireDate", date)}
              label_text="تاریخ استخدام"
              value={formData.hireDate}
            />
          </div>
          {/* اضافه کردن فیلدهای رمز عبور و تکرار رمز عبور */}
          <div className="flex justify-between">
            <DashboardInputs
              lable_text="آیدی تلگرام"
              placeholder_text="آیدی تلگرام خود را وارد کنید"
              value={formData.telegramId}
              onChange={(e) => onInputChange("telegramId", e.target.value)}
            />
            <DashboardInputs
              lable_text="رمز عبور"
              placeholder_text="رمز عبور خود را وارد کنید"
              type="password"
              value={formData.password}
              onChange={(e) => onInputChange("password", e.target.value)}
            />
            <DashboardInputs
              lable_text="تکرار رمز عبور"
              placeholder_text="رمز عبور خود را مجدداً وارد کنید"
              type="password"
              value={formData.confirmPassword}
              onChange={(e) => onInputChange("confirmPassword", e.target.value)}
            />
          </div>

          <div className="flex justify-center mt-8 mb-2">
            <DashboardButton
              inner_text="ثبت اطلاعات"
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

export default EmployeeEntry;
