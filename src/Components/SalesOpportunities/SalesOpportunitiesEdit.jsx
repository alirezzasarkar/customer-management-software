import DashboardButton from "../Common/DashboardButton";
import DashboardDropDown from "../Common/DashboardDropDown";
import DashboardDropDownCount from "../Common/DashboardDropDownCount";
import DashboardInputs from "../Common/DashboardInputs";
import DashboardTextarea from "../Common/DashboardTextarea";
import PersianDatePicker from "../Common/DatePicker";
import Title from "../Common/Title";

const SalesOpportunitiesEdit = ({
  customers,
  products,
  priorities,
  buyer_type,
  selectedBuyerType,
  onBuyerTypeSelect,
  onCustomerSelect,
  onProductSelect,
  onPrioritySelect,
  onInputChange,
  onSubmit,
  formData,
  selectedProducts,
  selectedCustomer,
  selectedPriority,
}) => {
  return (
    <div className="w-full">
      <Title title="ویرایش فرصت فروش" />
      <div className="bg-gray-100 p-5 sm:mx-6 rounded-md">
        <form onSubmit={onSubmit} className="flex flex-col gap-7">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 ">
            <DashboardDropDown
              label_text="نام و نام خانوادگی مشتری"
              items={customers}
              onSelect={onCustomerSelect}
              selectedItem={selectedCustomer}
            />

            <DashboardDropDown
              label_text="نوع خرید مشتری"
              items={buyer_type}
              onSelect={onBuyerTypeSelect}
              selectedItem={selectedBuyerType}
            />

            <PersianDatePicker
              label_text="تاریخ پیگیری"
              onChange={(date) => onInputChange("followUpDate", date)}
              value={formData.followUpDate}
            />

            <DashboardInputs
              lable_text="مبلغ تخمینی (تومان)"
              placeholder_text="مبلغ خود را وارد کنید"
              value={formData.estimatedAmount}
              onChange={(e) => onInputChange("estimatedAmount", e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 ">
            <DashboardDropDown
              label_text="اولویت فرصت"
              items={priorities}
              onSelect={onPrioritySelect}
              selectedItem={selectedPriority}
            />

            <DashboardDropDownCount
              label_text="محصولات مورد نظر"
              items={products}
              onSelect={onProductSelect}
              selectedItems={selectedProducts}
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
              inner_text="ثبت تغییرات"
              icon="/images/Tick.svg"
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

export default SalesOpportunitiesEdit;
