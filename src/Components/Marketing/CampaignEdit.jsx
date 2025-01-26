import DashboardButton from "../Common/DashboardButton";
import DashboardDropDownList from "../Common/DashboardDropDownList";
import DashboardInputs from "../Common/DashboardInputs";
import DashboardTextarea from "../Common/DashboardTextarea";
import PersianDatePicker from "../Common/DatePicker";
import Title from "../Common/Title";

const CampaignEdit = ({
  onSubmit,
  formData,
  onInputChange,
  onTargetRankSelect,
  targetRanks,
  selectedTargetRanks,
}) => {
  return (
    <div>
      <Title title="ویرایش کمپین" />
      <div className="bg-gray-100 p-5 sm:mx-6 rounded-md">
        <form className="flex flex-col gap-7" onSubmit={onSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 ">
            <DashboardInputs
              lable_text="نام کمپین"
              placeholder_text="نام کمپین خود را وارد کنید"
              value={formData.campaignName}
              onChange={(e) => onInputChange("campaignName", e.target.value)}
            />
            <PersianDatePicker
              onChange={(date) => onInputChange("followUpDate", date)}
              label_text="شروع کمپین"
              value={formData.followUpDate}
            />
            <PersianDatePicker
              onChange={(date) => onInputChange("endDate", date)}
              label_text="پایان کمپین"
              value={formData.endDate}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 ">
            <DashboardDropDownList
              label_text="مخاطبین هدف"
              items={targetRanks}
              onSelect={onTargetRankSelect}
              selectedItems={selectedTargetRanks}
              isMulti={true}
            />
            <DashboardTextarea
              label_text="متن پیام"
              placeholder_text="وارد کردن محتوای پیام"
              onChange={(e) => onInputChange("message", e.target.value)}
              value={formData.message}
            />
            <div></div>
          </div>

          <div className="flex justify-center gap-3 mt-10">
            <DashboardButton
              inner_text="ثبت تغییرات"
              icon="/images/Tick.svg"
              bg_color="bg-[#13A538]"
              button_type="submit"
              hover_state="hover:bg-[#288c41]"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CampaignEdit;
