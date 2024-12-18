import React from "react";
import Title from "../Common/Title";
import DashboardButton from "../Common/DashboardButton";

const NotificationDetail = ({ data }) => {
  const { title, text, send_date, send_time, audiences } = data;

  return (
    <>
      <Title title="جزئیات پیام" />
      <div className="bg-gray-100 p-10 mx-6 rounded-md">
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              عنوان پیام
            </span>
            <p className="text-gray-700 mt-2">{title}</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              تاریخ ارسال
            </span>
            <p className="text-gray-700 mt-2">{send_date}</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              زمان ارسال
            </span>
            <p className="text-gray-700 mt-2">{send_time}</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              مخاطبین هدف
            </span>
            <p className="text-gray-700 mt-2">{audiences}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 mt-10 mb-4">
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              متن پیام ارسال شده
            </span>
            <p className="text-gray-700 mt-2">{text}</p>
          </div>
        </div>

        <div className="flex justify-center gap-5 mt-20">
          <DashboardButton
            inner_text="ویرایش اطلاعات"
            icon="/src/Assets/Icons/edit.svg"
            bg_color="bg-[#FF6500]"
            hover_state="hover:bg-[#FF6500]"
          />
          <DashboardButton
            inner_text="حذف اطلاعات"
            icon="/src/Assets/Icons/delete.svg"
            bg_color="bg-[#FF0000]"
            hover_state="hover:bg-[#FF0000]"
          />
        </div>
      </div>
    </>
  );
};

export default NotificationDetail;
