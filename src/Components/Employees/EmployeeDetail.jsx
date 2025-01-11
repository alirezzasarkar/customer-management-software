import React from "react";
import Title from "../Common/Title";
import DashboardButton from "../Common/DashboardButton";

const EmployeeDetail = ({ data, onDelete }) => {
  const {
    id,
    picture,
    full_name,
    work_position,
    department,
    phone_number,
    email,
    date_of_assignment,
    telegram_id,
  } = data;

  const handleEditClick = () => {
    navigate(`/dashboard/employees/edit/${id}`);
  };

  return (
    <>
      <Title title="جزئیات پروفایل کارمند" />
      <div className="bg-gray-100 p-10 mx-6 rounded-md">
        <div className="grid grid-cols-3 gap-10 mb-8">
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              نام و نام خانوادگی
            </span>
            <p className="text-gray-700 mt-2">{full_name}</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              سمت شغلی
            </span>
            <p className="text-gray-700 mt-2">{work_position}</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              دپارتمان
            </span>
            <p className="text-gray-700 mt-2">{department}</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              شماره تماس
            </span>
            <p className="text-gray-700 mt-2">{phone_number}</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">ایمیل</span>
            <p className="text-gray-700 mt-2">{email}</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              تاریخ استخدام
            </span>
            <p className="text-gray-700 mt-2">{date_of_assignment}</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              آیدی تلگرام
            </span>
            <p className="text-gray-700 mt-2">{telegram_id}</p>
          </div>
        </div>

        <div className="flex justify-center gap-5 mt-10">
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

export default EmployeeDetail;
