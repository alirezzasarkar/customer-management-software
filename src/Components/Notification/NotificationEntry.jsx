import DashboardButton from "../Common/DashboardButton";
import DashboardDropDown from "../Common/DashBoardDropDown";
import DashboardTextarea from "../Common/DashboardTextarea";
import PersianDatePicker from "../Common/DatePicker";
import PersianTimePicker from "../Common/TimePicker";
import Title from "../Common/Title";

const NotificationEntry = ({
  onCustomerSelect,
  onInputChange,
  onSubmit,
  customers,
  formData,
}) => {
  return (
    <div>
      <Title title="وارد کردن پیام " />
      <div className="bg-gray-100 p-5 mx-6 rounded-md">
        <form className="flex flex-col gap-7" onSubmit={onSubmit}>
          <div className="flex justify-between">
            <DashboardDropDown
              items={customers}
              label_text="مخاطبین هدف"
              onSelect={onCustomerSelect}
            />
            <PersianDatePicker
              onChange={(date) => onInputChange("send_date", date)}
              label_text="تاریخ ارسال"
            />
            {/* <PersianDatePicker
              onChange={(date) => onInputChange("send_time", date)}
              label_text="زمان ارسال"
            /> */}
            <PersianTimePicker
              label_text="زمان ارسال"
              onChange={(time) => onInputChange("send_time", time)}
            />
          </div>
          <div className="flex justify-between">
            <DashboardTextarea
              label_text="متن پیام"
              placeholder_text="وارد کردن محتوای پیام"
              value={formData.text}
              onChange={(e) => onInputChange("text", e.target.value)}
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
