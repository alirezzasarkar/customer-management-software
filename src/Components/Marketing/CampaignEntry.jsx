import DashboardButton from "../Common/DashboardButton";
import DashboardDropDown from "../Common/DashboardDropDown";
import DashBoardInputs from "../Common/DashboardInputs";
import DashboardTextarea from "../Common/DashboardTextarea";
import PersianDatePicker from "../Common/DatePicker";
import Title from "../Common/Title";

const CampaignEntry = () => {
  return (
    <div>
      <Title title="وارد کردن کمپین " />
      <div className="bg-gray-100 p-5 sm:mx-6 mx-0 rounded-md">
        <form className="flex sm:justify-between  flex-col gap-5">
          <div className="flex sm:flex-row justify-between flex-col gap-7">
            <DashBoardInputs
              lable_text="نام کمپین"
              placeholder_text="نام کمپین خود را وارد کنید"
            />
            <PersianDatePicker label_text="شروع کمپین" />
            <PersianDatePicker label_text="پایان کمپین" />
          </div>
          <div className="flex sm:gap-16 sm:flex-row  flex-col gap-7">
            <DashboardDropDown label_text="مخاطبین هدف" />
            <DashboardTextarea
              label_text="متن پیام"
              placeholder_text="وارد کردن محتوای پیام"
            />
          </div>
          <div className="flex justify-center gap-3 mt-10">
            <DashboardButton
              inner_text="ثبت کمپین "
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

export default CampaignEntry;
