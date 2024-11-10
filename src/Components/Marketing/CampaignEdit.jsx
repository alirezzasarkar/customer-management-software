import Title from "../Common/Title";
import DashboardButton from "../Common/DashboardButton";
import DashBoardInputs from "../Common/DashboardInputs";
import PersianDatePicker from "../Common/DatePicker";
import DashboardDropDown from "../Common/DashboardDropDown";
import DashboardTextarea from "../Common/DashboardTextarea";

const CampaignEdit = () => {
  return (
    <div>
      <Title title="ویرایش کمپین" />
      <div className="bg-gray-100 p-5 mx-6 rounded-md">
        <form className="flex flex-col gap-7">
          <div className="flex justify-between">
            <DashBoardInputs
              lable_text="نام کمپین"
              placeholder_text="نام کمپین خود را وارد کنید"
            />
            <PersianDatePicker label_text="شروع کمپین" />
            <PersianDatePicker label_text="پایان کمپین" />
          </div>
          <div className="flex gap-16">
            <DashboardDropDown label_text="مخاطبین هدف" />
            <DashboardTextarea
              label_text="متن پیام"
              placeholder_text="وارد کردن محتوای پیام"
            />
          </div>
          <div className="flex justify-center gap-3 mt-10">
            <DashboardButton
              inner_text="ثبت تغییرات "
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

export default CampaignEdit;
