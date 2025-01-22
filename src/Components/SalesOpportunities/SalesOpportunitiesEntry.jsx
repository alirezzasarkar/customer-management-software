import DashboardButton from "../Common/DashboardButton";
import DashboardDropDown from "../Common/DashboardDropDown";
import DashboardDropDownCount from "../Common/DashboardDropDownCount";
import DashboardInputs from "../Common/DashboardInputs";
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
  selectedProducts,
  selectedCustomer,
  selectedPriority,
  buyer_type,
  onbuyer_typeSelect,
  selectedbuyer_type,
}) => {
  return (
    <div className="w-full">
      <Title title="ثبت فرصت فروش" />
      <div className="bg-gray-100 p-5 sm:mx-6 rounded-md">
        <form onSubmit={onSubmit} className="flex flex-col gap-7">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 ">
            <DashboardDropDown
              label_text="نام و نام خانوادگی مشتری"
              items={customers}
              onSelect={onCustomerSelect}
              selectedItem={selectedCustomer}
            />

            <DashboardDropDown
              label_text="نوع خرید مشتری"
              items={buyer_type}
              onSelect={onbuyer_typeSelect}
              selectedItem={selectedbuyer_type}
            />

            <PersianDatePicker
              label_text="تاریخ پیگیری"
              onChange={(date) => onInputChange("followUpDate", date)}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
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

            <DashboardInputs
              lable_text="مبلغ تخمینی (تومان)"
              placeholder_text="مبلغ خود را وارد کنید"
              value={formData.estimatedAmount}
              onChange={(e) => onInputChange("estimatedAmount", e.target.value)}
            />
          </div>
          <DashboardTextarea
            label_text="افزودن یادداشت"
            placeholder_text="افزودن یادداشت‌هایی از جلسات یا تماس‌های انجام‌شده"
            value={formData.description}
            onChange={(e) => onInputChange("description", e.target.value)}
            width="lg:w-[31%] w-full"
          />

          <div className="flex justify-center gap-3 mt-10">
            <DashboardButton
              inner_text="ثبت اطلاعات"
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

export default SalesOpportunitiesEntry;
