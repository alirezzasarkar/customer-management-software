// import DatePicker from "react-multi-date-picker";
import DashboardDropDown from "../Common/DashBoardDropDown";
import DashBoardInputs from "../Common/DashBoardInputs";
import DashboardTextarea from "../Common/DashboardTextarea";
import PersianDatePicker from "../Common/DatePicker";
import Title from "../Common/Title";
import DashboardButton from "../Common/DashboardButton";

const SalesOpportunitiesEntry = () => {
  return (
    <div>
      <Title title="ثبت فرصت فروش" />
      <div className="bg-gray-100 p-5 mx-6 rounded-md">
        <form className="flex flex-col gap-7">
          <div className="flex justify-between">
            <DashBoardInputs
              lable_text="نام و نام خانوادگی"
              placeholder_text="نام و نام خانوادگی خود را وارد کنید"
            />
            <PersianDatePicker />
            <DashBoardInputs
              lable_text="مبلغ کل"
              placeholder_text="مبلغ خود را وارد کنید"
            />
          </div>
          <div className="flex justify-between">
            <DashboardDropDown label_text="اولویت فرصت" />
            <DashboardDropDown label_text="محصول مورد نظر" />
            <DashboardTextarea
              label_text="افزودن یادداشت"
              placeholder_text="افزودن یادداشت‌هایی از جلسات یا تماس‌های انجام‌شده"
            />
          </div>
          <div className="flex justify-center gap-3 mt-10">
            <DashboardButton
              inner_text="ثبت اطلاعات "
              icon="/src/Assets/Icons/Tick.svg"
              bg_color="bg-[#13A538]"
              button_type="submit"
            />
            <DashboardButton
              inner_text="ویرایش اطلاعات "
              icon="/src/Assets/Icons/Edit_Icon.svg"
              bg_color="bg-[#FF6500]"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SalesOpportunitiesEntry;
