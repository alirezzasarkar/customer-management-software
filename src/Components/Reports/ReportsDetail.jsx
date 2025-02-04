import DashboardButton from "../Common/DashboardButton";
import Title from "../Common/Title";

const ReportsDetail = () => {
  return (
    <>
      <Title title="نمایش جزئیات گزارش‌ کار" />
      <div className="bg-gray-100 p-5 sm:mx-6 rounded-md">
        <div className="flex gap-52 mx-2 text-center">
          <section>
            <label className="text-sm text-blue-800 font-semibold">
              نام کارمند
            </label>
            <p>{}</p>
          </section>
          <section className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              تاریخ ارسال{" "}
            </span>
            <p className="text-gray-700 mt-2">{}</p>
          </section>
        </div>
        <div className="mt-8">
          <p>{}</p>
        </div>
        <div className="flex justify-center gap-5 mt-10">
          <DashboardButton
            inner_text="ویرایش گزارش‌ کار "
            icon="/images/edit.svg"
            bg_color="bg-[#FF6500]"
            hover_state="hover:bg-[#FF6500] opacity-80"
          />
          <DashboardButton
            inner_text="حذف گزارش‌ کار"
            icon="/images/delete.svg"
            bg_color="bg-[#FF0000]"
            hover_state="hover:bg-[#FF0000]"
          />
        </div>
      </div>
    </>
  );
};

export default ReportsDetail;
