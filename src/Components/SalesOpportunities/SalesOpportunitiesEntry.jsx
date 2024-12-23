import DashboardButton from "../Common/DashboardButton";
import DashboardDropDown from "../Common/DashBoardDropDown";
import DashboardDropDownList from "../Common/DashboardDropDownList";
import DashBoardInputs from "../Common/DashBoardInputs";
import DashboardTextarea from "../Common/DashboardTextarea";
import PersianDatePicker from "../Common/DatePicker";
import Title from "../Common/Title";

const SalesOpportunitiesEntry = ({
  customers,
  products,
  priorities,
  onCustomerSelect,
  onProductSelect,
  onPrioritySelect,
  onInputChange,
  onSubmit,
  formData,
}) => {
  return (
    <div className="w-full">
      <Title title="ثبت فرصت فروش" />
      <div className="bg-gray-100 p-5 sm:mx-6 rounded-md">
        <form onSubmit={onSubmit} className="flex flex-col gap-7">
          <div className="sm:flex sm:justify-between sm:flex-row flex flex-col gap-5">
            <DashboardDropDown
              label_text="نام و نام خانوادگی"
              items={customers}
              onSelect={onCustomerSelect}
            />
            <PersianDatePicker
              label_text={"تاریخ پیگیری"}
              onChange={(date) => onInputChange("followUpDate", date)}
            />
            <DashBoardInputs
              lable_text="مبلغ کل"
              placeholder_text="مبلغ خود را وارد کنید"
              value={formData.estimatedAmount}
              onChange={(e) => onInputChange("estimatedAmount", e.target.value)}
            />
          </div>
          <div className="sm:flex sm:justify-between sm:flex-row flex flex-col gap-5">
            <DashboardDropDown
              label_text="اولویت فرصت"
              items={priorities}
              onSelect={onPrioritySelect}
            />
            <DashboardDropDownList
              label_text="محصول مورد نظر"
              items={products}
              onSelect={onProductSelect}
            />
            <DashboardTextarea
              label_text="افزودن یادداشت"
              placeholder_text="افزودن یادداشت‌هایی از جلسات یا تماس‌های انجام‌شده"
              value={formData.description}
              onChange={(e) => onInputChange("description", e.target.value)}
            />
          </div>
          <div className="flex justify-center gap-3 mt-10">
            <DashboardButton
              inner_text="ثبت اطلاعات"
              icon="/src/Assets/Icons/Tick.svg"
              bg_color="bg-[#13A538]"
              button_type="submit"
              hover_state="hover:bg-[#288c41]"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SalesOpportunitiesEntry;
