import React from "react";
import Title from "../Common/Title";
import DashboardButton from "../Common/DashboardButton";

const SalesOpportunitiesDetail = ({ data }) => {
  return (
    <div>
      <Title title="جزئیات فرصت فروش" />
      <div className="bg-gray-100 p-5 sm:mx-6 rounded-md">
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 mb-4">
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              نام مشتری
            </span>
            <p className="text-gray-700 mt-2">{data.customer_name}</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              تاریخ پیگیری
            </span>
            <p className="text-gray-700 mt-2">{data.follow_up_date}</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              اولویت فرصت
            </span>
            <p className="text-gray-700 mt-2">{data.opportunity_priority}</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 mt-10 mb-4">
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              نام محصول
            </span>
            <p className="text-gray-700 mt-2">{data.product_name}</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              مبلغ تخمینی
            </span>
            <p className="text-gray-700 mt-2">{data.estimated_amount} تومان</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">توضیحات</span>
            <p className="text-gray-700 mt-2">{data.description}</p>
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
    </div>
  );
};

export default SalesOpportunitiesDetail;
