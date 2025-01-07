import React from "react";
import Table from "../Common/Table";
import Title from "../Common/Title";
import DashboardButton from "../Common/DashboardButton";
import { convertToShamsi } from "../../Utils/convertToShamsi";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const columns = [
  { id: "contract_date", label: "تاریخ ثبت" },
  { id: "price", label: "مبلغ فاکتور (ریال)" },
  { id: "description", label: "توضیحات" },
];

const CustomerDetail = ({ customerData, factors, onDelete }) => {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate(`/dashboard/customers/edit/${customerData.id}`);
  };

  const getBorderColorClass = (rank) => {
    switch (rank) {
      case "BR":
        return "border-bronze";
      case "SI":
        return "border-silver";
      case "GO":
        return "border-gold";
      default:
        return "border-bronze";
    }
  };

  const getBuyerRankInPersian = (rank) => {
    switch (rank) {
      case "BR":
        return "برنزی";
      case "SI":
        return "نقره‌ای";
      case "GO":
        return "طلایی";
      default:
        return "ناشناخته";
    }
  };

  function getColorClasses(rank) {
    switch (rank) {
      case "BR":
        return "border-bronze text-bronze";
      case "SI":
        return "border-silver text-silver";
      case "GO":
        return "border-gold text-gold";
      default:
        return "border-gray-300 text-gray-400";
    }
  }

  return (
    <>
      <Title title="جزئیات پروفایل مشتری" />
      <div className="bg-gray-100 sm:p-10 p-5 sm:mx-6 rounded-md">
        <div className="flex mb-10 justify-center">
          <FaUser
            className={`w-24 h-24 bg-gray-200 rounded-full border-4 p-3 ${getColorClasses(
              customerData.buyer_rank
            )}`}
          />
        </div>

        <div className="grid sm:grid-cols-3 grid-cols-1 gap-10 mb-8">
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              نام و نام خانوادگی مشتری
            </span>
            <p className="text-gray-700 mt-2">{customerData?.full_name}</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              نوع کاربر
            </span>
            <p className="text-gray-700 mt-2">
              {getBuyerRankInPersian(customerData?.buyer_rank)}
            </p>
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

        <div className="flex justify-center gap-5 mt-8">
          <DashboardButton
            inner_text="ویرایش اطلاعات"
            icon="/src/Assets/Icons/edit.svg"
            bg_color="bg-[#FF6500]"
            hover_state="hover:bg-[#FF6500] opacity-80"
            onClick={handleEditClick}
          />
          <DashboardButton
            inner_text="حذف اطلاعات"
            icon="/src/Assets/Icons/delete.svg"
            bg_color="bg-[#FF0000]"
            hover_state="hover:bg-[#FF0000]"
            onClick={onDelete}
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
