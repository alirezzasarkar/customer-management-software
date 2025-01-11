import DashboardButton from "../Common/DashboardButton";
import DashboardTextarea from "../Common/DashboardTextarea";
import PersianDatePicker from "../Common/DatePicker";
import Title from "../Common/Title";
import DashboardDropDownList from "../Common/DashboardDropDownList";
import TimePicker from "../Common/TimePicker";
import DashboardInputs from "../Common/DashboardInputs";

const NotificationEntry = ({
  onCustomerSelect,
  onInputChange,
  onSubmit,
  customers,
  formData,
}) => {
  return (
    <div>
      <Title title="ارسال پیام زمان‌دار" />
      <div className="bg-gray-100 p-5 mx-6 rounded-md">
        <form className="flex flex-col gap-7" onSubmit={onSubmit}>
          <div className="flex justify-between gap-5">
            <DashboardDropDownList
              items={customers}
              label_text="مخاطبین هدف"
              onSelect={onCustomerSelect}
              selectedItems={customers.filter((customer) =>
                formData.audiences.includes(customer.id)
              )}
            />
            <PersianDatePicker
              onChange={(date) => onInputChange("send_date", date)}
              label_text="تاریخ ارسال"
              value={formData.send_date}
            />
            <div className="flex gap-2">
              <TimePicker
                lable_text="ساعت ارسال"
                placeholder_text="HH"
                type="number"
                min="00"
                max="23"
                value={formData.send_hour}
                onChange={(e) => onInputChange("send_hour", e.target.value)}
              />
              <TimePicker
                lable_text="دقیقه ارسال"
                placeholder_text="MM"
                type="number"
                min="00"
                max="59"
                value={formData.send_minute}
                onChange={(e) => onInputChange("send_minute", e.target.value)}
              />
            </div>
          </div>
          <div className="flex gap-44">
            <DashboardInputs
              lable_text="عنوان پیام"
              placeholder_text="عنوان پیام را وارد کنید"
              value={formData.title}
              onChange={(e) => onInputChange("title", e.target.value)}
            />
            <DashboardTextarea
              label_text="متن پیام"
              placeholder_text="وارد کردن محتوای پیام"
              value={formData.text}
              onChange={(e) => onInputChange("text", e.target.value)}
            />
          </div>
          <div className="flex justify-center gap-3 mt-10">
            <DashboardButton
              inner_text="ارسال پیام"
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

export default NotificationEntry;
