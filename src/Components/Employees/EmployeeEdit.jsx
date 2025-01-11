import DashboardButton from "../Common/DashboardButton";
import DashboardDropDown from "../Common/DashboardDropDown";
import DashboardInputs from "../Common/DashboardInputs";
import PersianDatePicker from "../Common/DatePicker";
import ProfileImage from "../Common/ProfileImage";
import Title from "../Common/Title";

const EmployeeEdit = ({
  formData,
  jobTitles,
  onInputChange,
  onJobTitleChange,
  onProfilePictureUpload,
  onSubmit,
}) => {
  return (
    <>
      <Title title="ویرایش پروفایل کارمند" />
      <div className="bg-gray-100 p-5 mx-6 rounded-md">
        <form className="flex flex-col gap-7" onSubmit={onSubmit}>
          <div className="p-4 flex justify-center">
            <ProfileImage
              upload_text="عکس خود را آپلود کنید"
              onUpload={onProfilePictureUpload}
              imageUrl={formData.profilePictureUrl}
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
              lable_text="ایمیل "
              placeholder_text="ایمیل خود را وارد کنید"
              value={formData.email}
              onChange={(e) => onInputChange("email", e.target.value)}
            />
          </div>
          <div className="flex justify-between">
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
            <DashboardInputs
              lable_text="آیدی تلگرام"
              placeholder_text="آیدی تلگرام خود را وارد کنید"
              value={formData.telegramId}
              onChange={(e) => onInputChange("telegramId", e.target.value)}
            />
          </div>

          <div className="flex justify-center mt-8 mb-2">
            <DashboardButton
              inner_text="به‌روزرسانی "
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
