import DashboardButton from "../Common/DashboardButton";
import DashboardDropDownList from "../Common/DashboardDropDownList";
import DashboardInputs from "../Common/DashboardInputs";
import DashboardTextarea from "../Common/DashboardTextarea";
import PersianDatePicker from "../Common/DatePicker";
import TimePicker from "../Common/TimePicker";
import Title from "../Common/Title";

const NotificationEdit = ({
  onCustomerSelect,
  onInputChange,
  onSubmit,
  customers,
  formData,
}) => {
  return (
    <div>
      <Title title="ویرایش اطلاع‌رسانی" />
      <div className="bg-gray-100 p-5 sm:mx-6 rounded-md">
        <form className="flex flex-col gap-7" onSubmit={onSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 ">
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 ">
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
              inner_text="به‌روزرسانی "
              icon="/images/Send_Message.svg"
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
