import DashboardButton from "../Common/DashboardButton";
import DashboardDropDownList from "../Common/DashboardDropDownList";
import DashboardInputs from "../Common/DashboardInputs";
import DashboardTextarea from "../Common/DashboardTextarea";
import PersianDatePicker from "../Common/DatePicker";
import Title from "../Common/Title";

const TodosEntry = () => {
  return (
    <>
      <Title title="وارد کردن وظایف " />
      <div className="bg-gray-100 p-5 sm:mx-6 rounded-md">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 ">
          <DashboardDropDownList label_text="نام کارمند" />
          <DashboardInputs
            lable_text="آدرس"
            placeholder_text="آدرس پروژه را وارد کنید (اختیاری)"
          />
          <PersianDatePicker label_text="تاریخ تحویل " />
        </div>
        <div className="mt-8">
          <DashboardTextarea
            label_text="توضیحات"
            placeholder_text="توضیحات خود را یادداشت کنید"
          />
        </div>
        <div className="flex justify-center mt-8 mb-2">
          <DashboardButton
            inner_text="ثبت وظایف   "
            icon="/images/Tick.svg"
            bg_color="bg-[#13A538]"
            button_type="submit"
          />
        </div>
      </div>
    </>
  );
};

export default TodosEntry;
