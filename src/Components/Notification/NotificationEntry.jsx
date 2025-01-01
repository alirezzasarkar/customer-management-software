import DashboardButton from "../Common/DashboardButton";
import DashboardTextarea from "../Common/DashboardTextarea";
import PersianDatePicker from "../Common/DatePicker";
import PersianTimePicker from "../Common/TimePicker";
import Title from "../Common/Title";
import DashboardDropDownList from "../Common/DashboardDropDownList";
import DashboardInputs from "./../Common/DashboardInputs";

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
            <PersianTimePicker
              onChange={(time) => onInputChange("send_time", time)}
              label_text="زمان ارسال"
              value={formData.send_time}
            />
          </div>
          <div className="flex gap-20">
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
