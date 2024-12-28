import DashboardButton from "../Common/DashboardButton";
import DashboardDropDownList from "../Common/DashboardDropDownList";
import DashboardInputs from "../Common/DashBoardInputs";
import DashboardTextarea from "../Common/DashboardTextarea";
import PersianDatePicker from "../Common/DatePicker";
import Title from "../Common/Title";

const CampaignEntry = ({
  onSubmit,
  formData,
  onInputChange,
  onCustomerSelect,
  customers,
}) => {
  return (
    <div>
      <Title title="وارد کردن کمپین " />
      <div className="bg-gray-100 p-5 mx-6 rounded-md">
        <form className="flex flex-col gap-7" onSubmit={onSubmit}>
          <div className="flex justify-between">
            <DashboardInputs
              lable_text="نام کمپین"
              placeholder_text="نام کمپین خود را وارد کنید"
              value={formData.campaignName}
              onChange={(e) => onInputChange("campaignName", e.target.value)}
            />
            <PersianDatePicker
              onChange={(date) => onInputChange("followUpDate", date)}
              label_text="شروع کمپین"
            />
            <PersianDatePicker
              onChange={(end_date) => onInputChange("endDate", end_date)}
              label_text="پایان کمپین"
            />
          </div>
          <div className="flex gap-16">
            <DashboardDropDownList
              label_text="مخاطبین هدف"
              onSelect={onCustomerSelect}
              items={customers}
            />
            <DashboardTextarea
              label_text="متن پیام"
              placeholder_text="وارد کردن محتوای پیام"
              onChange={(e) => onInputChange("message", e.target.value)}
              value={formData.messageField}
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
