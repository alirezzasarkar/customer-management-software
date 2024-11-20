import DashboardButton from "../Common/DashboardButton";
import DashboardDropDown from "../Common/DashBoardDropDown";
import DashboardTextarea from "../Common/DashboardTextarea";
import PersianDatePicker from "../Common/DatePicker";
import Title from "../Common/Title";

const NotificationEntry = () => {
  return (
    <div>
      <Title title="وارد کردن پیام " />
      <div className="bg-gray-100 p-5 sm:mx-6 rounded-md">
        <form className="flex flex-col gap-7">
          <div className="flex sm:flex-row flex-col justify-between">
            <DashboardDropDown label_text="مخاطبین هدف" />
            <PersianDatePicker label_text="تاریخ ارسال" />
            <PersianDatePicker label_text="زمان ارسال" />
          </div>
          <div className="">
            <DashboardTextarea
              label_text="متن پیام"
              placeholder_text="وارد کردن محتوای پیام"
            />
          </div>
          <div className="flex justify-center gap-3 mt-10">
            <DashboardButton
              inner_text="ارسال زماندار پیام"
              icon="/src/Assets/Icons/Send_Message.svg"
              bg_color="bg-[#13A538]"
              button_type="submit"
            />
            <DashboardButton
              inner_text="ارسال پیام"
              icon="/src/Assets/Icons/second_sned_icon.svg"
              bg_color="bg-gray-100"
              border_color="border border-[#13A538] border-2 text-[#13A538!important]"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default NotificationEntry;
