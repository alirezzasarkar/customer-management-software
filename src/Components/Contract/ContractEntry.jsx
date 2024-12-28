import ContractFile from "../Common/ContractFile";
import DashboardButton from "../Common/DashboardButton";
import DashboardDropDown from "../Common/DashBoardDropDown";
import {
  default as DashBoardInputs,
  default as DashboardInputs,
} from "../Common/DashBoardInputs";
import DashboardTextarea from "../Common/DashboardTextarea";
import PersianDatePicker from "../Common/DatePicker";
import Title from "../Common/Title";

const ContractEntry = ({
  formData,
  products,
  onInputChange,
  onProductSelect,
  onSubmit,
}) => {
  return (
    <div>
      <Title title="وارد کردن فاکتور" />
      <div className="bg-gray-100 p-5 mx-6 rounded-md">
        <form className="flex flex-col gap-7" onSubmit={onSubmit}>
          <div className="flex justify-between">
            <DashBoardInputs
              lable_text="نام و نام خانوادگی"
              placeholder_text="نام و نام خانوادگی خود را وارد کنید"
              value={formData.fullName}
              onChange={(e) => onInputChange("fullName", e.target.value)}
            />
            <DashboardDropDown
              label_text="محصولات"
              items={products}
              onSelect={onProductSelect}
            />
            <DashboardInputs
              lable_text="مبلغ فاکتور"
              value={formData.price}
              onChange={(e) => onInputChange("price", e.target.value)}
            />
          </div>
          <div className="flex justify-between">
            <PersianDatePicker
              label_text="تاریخ ثبت فاکتور"
              value={formData.invoiceDate}
              onChange={(e) => onInputChange("invoiceDate", e.target.value)}
            />
            <DashboardTextarea
              label_text="شرایط فاکتور"
              placeholder_text="دوره گارانتی، خدمات پس از فروش"
              value={formData.description}
              onChange={(e) => onInputChange("description", e.target.value)}
            />
            <ContractFile />
          </div>
          <div className="flex justify-center gap-3 mt-10">
            <DashboardButton
              inner_text="ثبت قرار داد"
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

export default ContractEntry;
