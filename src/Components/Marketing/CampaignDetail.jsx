import React from "react";
import Title from "../Common/Title";
import DashboardButton from "../Common/DashboardButton";

const CampaignDetail = ({ data, onDelete }) => {
  return (
    <>
      <Title title="جزئیات کمپین" />
      <div className="bg-gray-100 p-10 mx-6 rounded-md">
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              نام کمپین
            </span>
            <p className="text-gray-700 mt-2">{data.campaign_name}</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              شروع کمپین
            </span>
            <p className="text-gray-700 mt-2">{data.start_date}</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              پایان کمپین
            </span>
            <p className="text-gray-700 mt-2">{data.end_date}</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-10 mb-4">
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              مخاطبین هدف
            </span>
            <ul className="mt-2 list-disc list-inside">
              {Array.isArray(data.target_audiences) &&
              data.target_audiences.length > 0 ? (
                data.target_audiences.map((audience, index) => (
                  <li key={index} className="text-gray-700">
                    {audience}
                  </li>
                ))
              ) : (
                <p className="text-gray-700">هیچ مخاطبی یافت نشد</p>
              )}
            </ul>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              متن پیام
            </span>
            <p className="text-gray-700 mt-2">{data.message}</p>
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
            onClick={onDelete} // افزودن عملکرد حذف
          />
        </div>
      </div>
    </>
  );
};

export default CampaignDetail;
