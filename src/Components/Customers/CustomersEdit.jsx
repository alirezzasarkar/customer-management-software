import DashboardButton from "../Common/DashboardButton";
import DashboardInputs from "../Common/DashboardInputs";
import PersianDatePicker from "../Common/DatePicker";
import DashboardDropDown from "../Common/DashboardDropDown"; // برای فیلد buyer_rank
import Title from "../Common/Title";
import DashboardTextarea from "../Common/DashboardTextarea"; // برای فیلد description

const CustomersEdit = ({
  formData,
  onSubmit,
  onInputChange,
  onProfilePictureUpload,
  buyer_rank, // برای فیلد buyer_rank
  selectedbuyer_rank, // برای فیلد buyer_rank
  onbuyer_rankSelect, // برای فیلد buyer_rank
}) => {
  return (
    <div>
      <Title title="ویرایش پروفایل مشتریان" />
      <div className="bg-gray-100 p-5 sm:mx-6 rounded-md ">
        <form className="flex flex-col gap-7" onSubmit={onSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 ">
            <DashboardInputs
              lable_text="نام و نام خانوادگی"
              placeholder_text="نام و نام خانوادگی خود را وارد کنید"
              value={formData.full_name}
              onChange={(e) => onInputChange("full_name", e.target.value)}
            />
            <DashboardInputs
              lable_text="کد ملی"
              placeholder_text="کد ملی خود را وارد کنید"
              value={formData.national_id}
              onChange={(e) => onInputChange("national_id", e.target.value)}
            />
            <DashboardInputs
              lable_text="ایمیل "
              placeholder_text="ایمیل خود را وارد کنید"
              value={formData.email}
              onChange={(e) => onInputChange("email", e.target.value)}
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 ">
            <DashboardInputs
              lable_text="شماره تماس"
              placeholder_text="شماره تماس خود را وارد کنید"
              value={formData.phone}
              onChange={(e) => onInputChange("phone", e.target.value)}
            />
            <PersianDatePicker
              onChange={(date) => onInputChange("birth_date", date)}
              label_text="تاریخ تولد"
              value={formData.birth_date}
            />
            <DashboardInputs
              lable_text="آیدی اینستاگرام"
              placeholder_text="آیدی خود را وارد کنید"
              value={formData.instagram}
              onChange={(e) => onInputChange("instagram", e.target.value)}
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 ">
            <DashboardInputs
              lable_text="آیدی تلگرام"
              placeholder_text="آیدی خود را وارد کنید"
              value={formData.telegram}
              onChange={(e) => onInputChange("telegram", e.target.value)}
            />
            <DashboardDropDown
              label_text="نوع مشتری"
              items={buyer_rank}
              onSelect={onbuyer_rankSelect}
              selectedItem={selectedbuyer_rank}
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 ">
            <DashboardInputs
              lable_text="آدرس"
              placeholder_text="آدرس خود را وارد کنید"
              value={formData.address}
              onChange={(e) => onInputChange("address", e.target.value)}
            />
            <DashboardTextarea
              label_text="توضیحات"
              placeholder_text="افزون توضیحات راجب مشتری"
              value={formData.description}
              onChange={(e) => onInputChange("description", e.target.value)}
            />
          </div>

          <div className="flex justify-center mt-8 mb-2">
            <DashboardButton
              inner_text="به‌روزرسانی"
              icon="/images/Tick.svg"
              bg_color="bg-[#13A538]"
              button_type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomersEdit;
