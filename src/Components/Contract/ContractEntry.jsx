import DashboardDropDown from "../Common/DashBoardDropDown";
import DashBoardInputs from "../Common/DashBoardInputs";
import DashboardTextarea from "../Common/DashboardTextarea";
import PersianDatePicker from "../Common/DatePicker";
import Title from "../Common/Title";
import DashboardButton from "../Common/DashboardButton";
import ContractFile from "../Common/ContractFile";

const ContractEntry = () => {
  return (
    <div>
      <Title title="وارد کردن فاکتور" />
      <div className="bg-gray-100 p-5 mx-6 rounded-md">
        <form className="flex flex-col gap-7">
          <div className="flex justify-between">
            <DashBoardInputs
              lable_text="نام و نام خانوادگی"
              placeholder_text="نام و نام خانوادگی خود را وارد کنید"
            />
            <DashboardDropDown label_text="محصولات" />
            <DashboardDropDown label_text="مبلغ فاکتور" />
          </div>
          <div className="flex justify-between">
            <PersianDatePicker label_text="تاریخ ثبت فاکتور" />
            <DashboardTextarea
              label_text="شرایط فاکتور"
              placeholder_text="دوره گارانتی، خدمات پس از فروش"
            />
            <ContractFile />
          </div>
          <div className="flex justify-center gap-3 mt-10">
            <DashboardButton
              inner_text="ثبت قرار داد "
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
