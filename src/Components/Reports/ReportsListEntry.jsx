import React from "react";
import DashboardButton from "../Common/DashboardButton";
import DashboardTextarea from "../Common/DashboardTextarea";
import Title from "../Common/Title";

const ReportsListEntry = () => {
  const currentDate = new Date().toLocaleDateString("fa-IR");

  return (
    <>
      <Title title="وارد کردن گزارش‌ کار" />
      <div className="bg-gray-100 p-5 sm:mx-6 rounded-md">
        <div className="flex gap-52 mx-2 text-center">
          <section>
            <label className="text-[#153D8A] text-base">نام کارمند</label>
            <p>{}</p>
          </section>
          <section>
            <label className="text-[#153D8A] text-base">تاریخ ارسال</label>
            <p>{currentDate}</p>
          </section>
        </div>
        <div className="mt-8">
          <DashboardTextarea
            label_text="متن گزارش کار"
            placeholder_text="فعالیت های خود را یادداشت کنید"
          />
        </div>
        <div className="flex justify-center mt-10">
          <DashboardButton
            inner_text="ثبت گزارش‌ کار"
            icon="/images/Tick.svg"
            bg_color="bg-[#13A538]"
            button_type="submit"
          />
        </div>
      </div>
    </>
  );
};

export default ReportsListEntry;
