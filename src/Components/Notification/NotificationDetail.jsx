import React from "react";
import Title from "../Common/Title";
import DashboardButton from "../Common/DashboardButton";
import { useNavigate } from "react-router-dom";

const NotificationDetail = ({ data, onDelete }) => {
  const { title, text, send_date, send_time, audiences } = data;

  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate(`/dashboard/notification/edit/${data.id}`);
  };

  return (
    <>
      <Title title="جزئیات پیام" />
      <div className="bg-gray-100 p-10 mx-6 rounded-md">
        <div className="grid grid-cols-3 gap-10 mb-4">
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
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              متن پیام ارسال شده
            </span>
            <p className="text-gray-700 mt-2">{text}</p>
          </div>
        </div>

        <div className="flex justify-center gap-5 mt-20">
          {/* <DashboardButton
            inner_text="ویرایش اطلاعات"
            icon="/images/edit.svg"
            bg_color="bg-[#FF6500]"
            hover_state="hover:bg-[#FF6500] opacity-80"
            onClick={handleEditClick}
          /> */}
          <DashboardButton
            inner_text="حذف اطلاعات"
            icon="/images/delete.svg"
            bg_color="bg-[#FF0000]"
            hover_state="hover:bg-[#FF0000]"
            onClick={onDelete}
          />
        </div>
      </div>
    </>
  );
};

export default NotificationDetail;
