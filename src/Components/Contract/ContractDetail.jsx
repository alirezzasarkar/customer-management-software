import React from "react";
import Table from "../Common/Table";
import Title from "../Common/Title";
import DashboardButton from "./../Common/DashboardButton";
import { useNavigate } from "react-router-dom";

const columns = [
  { id: "product_name", label: "نام محصول" },
  { id: "quantity", label: "تعداد" },
  { id: "price", label: "قیمت محصول (ریال)" },
  { id: "category", label: "دسته بندی" },
];

const ContractDetail = ({ data, products, onDelete }) => {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate(`/dashboard/invoice/edit/${data.id}`);
  };

  return (
    <>
      <Title title="جزئیات فاکتور" />
      <div className="bg-gray-100 p-10 mx-6 rounded-md">
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              نام و نام خانوادگی مشتری
            </span>
            <p className="text-gray-700 mt-2">{data.customer_name}</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              مبلغ فاکتور (ریال)
            </span>
            <p className="text-gray-700 mt-2">{data.price}</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              تاریخ ثبت فاکتور
            </span>
            <p className="text-gray-700 mt-2">{data.contract_date}</p>
          </div>
          <div className="flex flex-col col-span-3">
            <span className="text-sm text-blue-800 font-semibold">توضیحات</span>
            <p className="text-gray-700 mt-2">{data.description}</p>
          </div>
        </div>

        <div className="flex justify-center gap-5 mt-10">
          {/* <DashboardButton
            inner_text="ویرایش اطلاعات"
            icon="/src/Assets/Icons/edit.svg"
            bg_color="bg-[#FF6500]"
            hover_state="hover:bg-[#FF6500] opacity-80"
            onClick={handleEditClick}
          /> */}
          <DashboardButton
            inner_text="حذف اطلاعات"
            icon="/src/Assets/Icons/delete.svg"
            bg_color="bg-[#FF0000]"
            hover_state="hover:bg-[#FF0000]"
            onClick={onDelete}
          />
        </div>
      </div>

      <div className="bg-gray-100 mx-6 rounded-md mt-7">
        <Table columns={columns} data={products} pageName="products" />
      </div>
    </>
  );
};

export default ContractDetail;
