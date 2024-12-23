import React from "react";
import Table from "../Common/Table";
import Title from "../Common/Title";
import DashboardButton from "../Common/DashboardButton";
import { convertToShamsi } from "../../Utils/convertToShamsi";

const columns = [
  { id: "contract_date", label: "تاریخ ثبت" },
  { id: "price", label: "مبلغ فاکتور" },
  { id: "description", label: "توضیحات" },
];

const CustomerDetail = ({ customerData, factors }) => {
  return (
    <>
      <Title title="جزئیات پروفایل مشتری" />
      <div className="bg-gray-100 sm:p-10 p-5 sm:mx-6 rounded-md">
        <div className="flex mb-10">
          <img
            src={customerData?.customer_picture}
            className="w-24 h-24 bg-gray-200 rounded-full border-4 border-yellow-400"
          />
        </div>

        <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 mb-8">
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              نام و نام خانوادگی
            </span>
            <p className="text-gray-700 mt-2">{customerData?.full_name}</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              تاریخ تولد
            </span>
            <p className="text-gray-700 mt-2">
              {convertToShamsi(customerData?.date_of_birth)}
            </p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">کد ملی</span>
            <p className="text-gray-700 mt-2">{customerData?.national_id}</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              شماره تماس
            </span>
            <p className="text-gray-700 mt-2">{customerData?.phone_number}</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">ایمیل</span>
            <p className="text-gray-700 mt-2">{customerData?.email}</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              آیدی تلگرام
            </span>
            <p className="text-gray-700 mt-2">{customerData?.telegram_id}</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              آیدی اینستاگرام
            </span>
            <p className="text-gray-700 mt-2">{customerData?.instagram_id}</p>
          </div>
        </div>

        <div className="flex justify-center gap-5 mt-5">
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

      <div className="bg-gray-100 sm:mx-6 rounded-md mt-7">
        <Table columns={columns} data={factors} pageName="invoice" />
      </div>
    </>
  );
};

export default CustomerDetail;
