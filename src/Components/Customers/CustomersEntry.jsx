import DashboardButton from "../Common/DashboardButton";
import DashboardDropDown from "../Common/DashboardDropDown";
import DashboardInputs from "../Common/DashboardInputs";
import PersianDatePicker from "../Common/DatePicker";
import Title from "../Common/Title";
import DashboardTextarea from "./../Common/DashboardTextarea";

const CustomersEntry = ({
  formData,
  onSubmit,
  onInputChange,
  buyer_rank,
  onbuyer_rankSelect,
  selectedbuyer_rank,
}) => {
  return (
    <div>
      <Title title="ثبت مشتری جدید" />
      <div className="bg-gray-100 p-5 sm:mx-6 rounded-md ">
        <form className="flex flex-col gap-7" onSubmit={onSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 ">
            <DashboardInputs
              lable_text="نام و نام خانوادگی مشتری"
              placeholder_text="نام و نام خانوادگی را وارد کنید"
              value={formData.full_name}
              onChange={(e) => onInputChange("full_name", e.target.value)}
            />
            <DashboardDropDown
              label_text="نوع مشتری"
              items={buyer_rank}
              onSelect={onbuyer_rankSelect}
              selectedItem={selectedbuyer_rank}
            />
            <DashboardInputs
              lable_text="کد ملی"
              placeholder_text="کد ملی را وارد کنید"
              value={formData.national_id}
              onChange={(e) => onInputChange("national_id", e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 ">
            <DashboardInputs
              lable_text="شماره تماس"
              placeholder_text="شماره تماس را وارد کنید"
              value={formData.phone}
              onChange={(e) => onInputChange("phone", e.target.value)}
            />

            <PersianDatePicker
              onChange={(date) => onInputChange("birth_date", date)}
              label_text="تاریخ تولد"
            />

            <DashboardInputs
              lable_text="ایمیل"
              placeholder_text="ایمیل را وارد کنید"
              value={formData.email}
              onChange={(e) => onInputChange("email", e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 ">
            <DashboardInputs
              lable_text="آیدی تلگرام"
              placeholder_text="آیدی را وارد کنید"
              value={formData.telegram}
              onChange={(e) => onInputChange("telegram", e.target.value)}
            />
            <DashboardInputs
              lable_text="آدرس"
              placeholder_text="آدرس را وارد کنید"
              value={formData.address}
              onChange={(e) => onInputChange("address", e.target.value)}
            />
            <DashboardInputs
              lable_text="آیدی اینستاگرام"
              placeholder_text="آیدی را وارد کنید"
              value={formData.instagram}
              onChange={(e) => onInputChange("instagram", e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 ">
            <DashboardTextarea
              label_text="توضیحات"
              placeholder_text="افزون توضیحات راجب مشتری"
              value={formData.description}
              onChange={(e) => onInputChange("description", e.target.value)}
              // width="lg:w-[31%] xl:w-[31.5%]"
            />
          </div>

          <div className="flex justify-center mt-8 mb-2">
            <DashboardButton
              inner_text="ثبت اطلاعات "
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

export default CustomersEntry;
