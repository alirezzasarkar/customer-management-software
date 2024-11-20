import ContractFile from "../Common/ContractFile";
import DashboardButton from "../Common/DashboardButton";
import DashboardDropDown from "../Common/DashBoardDropDown";
import DashBoardInputs from "../Common/DashBoardInputs";
import DashboardTextarea from "../Common/DashboardTextarea";
import PersianDatePicker from "../Common/DatePicker";
import Title from "../Common/Title";

const ContractEntry = () => {
  return (
    <div>
      <Title title="وارد کردن فاکتور" />
      <div className="bg-gray-100 p-5 sm:mx-6 mx-0 rounded-md">
        <form className="flex sm:justify-between sm:flex-row flex-col gap-5">
          <div className="flex justify-between sm:flex-row flex-col gap-7">
            <DashBoardInputs
              lable_text="نام و نام خانوادگی"
              placeholder_text="نام و نام خانوادگی خود را وارد کنید"
            />
            <DashboardDropDown label_text="محصولات" />
            <DashboardDropDown label_text="مبلغ فاکتور" />
          </div>
          <div className="flex justify-between sm:flex-row flex-col gap-7">
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
