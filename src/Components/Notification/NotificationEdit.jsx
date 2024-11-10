import DashboardDropDown from "../Common/DashBoardDropDown";
import DashboardTextarea from "../Common/DashboardTextarea";
import PersianDatePicker from "../Common/DatePicker";
import Title from "../Common/Title";
import DashboardButton from "../Common/DashboardButton";

const NotificationEdit = () => {
  return (
    <div>
      <Title title="ویرایش پیام" />
      <div className="bg-gray-100 p-5 mx-6 rounded-md">
        <form className="flex flex-col gap-7">
          <div className="flex justify-between">
            <DashboardDropDown label_text="مخاطبین هدف" />
            <PersianDatePicker label_text="تاریخ ارسال" />
            <PersianDatePicker label_text="زمان ارسال" />
          </div>
          <div className="flex justify-between">
            <DashboardTextarea
              label_text="متن پیام"
              placeholder_text="وارد کردن محتوای پیام"
            />
          </div>
          <div className="flex justify-center gap-3 mt-10">
            <DashboardButton
              inner_text="ثبت تغییرات "
              icon="/src/Assets/Icons/Send_Message.svg"
              bg_color="bg-[#13A538]"
              button_type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default NotificationEdit;
