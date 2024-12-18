import React from "react";
import Title from "../Common/Title";
import DashboardButton from "../Common/DashboardButton";

const ProductsDetail = ({ data }) => {
  const {
    product_name,
    price,
    size,
    color,
    status,
    category,
    product_image,
    description,
  } = data;

  return (
    <>
      <Title title="جزئیات محصول" />
      <div className="bg-gray-100 p-10 mx-6 rounded-md">
        <div className="flex justify-center mb-8">
          <img
            src={product_image || "https://via.placeholder.com/150"}
            alt={product_name}
            className="w-32 h-32 rounded-md shadow-md"
          />
        </div>

        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              نام محصول
            </span>
            <p className="text-gray-700 mt-2">{product_name}</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              رنگ محصول
            </span>
            <p className="text-gray-700 mt-2">{color}</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              اندازه محصول
            </span>
            <p className="text-gray-700 mt-2">{size}</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              قیمت محصول
            </span>
            <p className="text-gray-700 mt-2">{price}</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">وضعیت</span>
            <p className="text-gray-700 mt-2">{status}</p>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-blue-800 font-semibold">
              دسته بندی
            </span>
            <p className="text-gray-700 mt-2">{category}</p>
          </div>
        </div>

        <div className="flex flex-col mt-8">
          <span className="text-sm text-blue-800 font-semibold">توضیحات</span>
          <p className="text-gray-700 mt-2 leading-relaxed">{description}</p>
        </div>

        <div className="flex justify-center gap-5 mt-10">
          <DashboardButton
            inner_text="ویرایش محصول"
            icon="/src/Assets/Icons/edit.svg"
            bg_color="bg-[#FF6500]"
            hover_state="hover:bg-[#FF6500]"
          />
          <DashboardButton
            inner_text="حذف محصول"
            icon="/src/Assets/Icons/delete.svg"
            bg_color="bg-[#FF0000]"
            hover_state="hover:bg-[#FF0000]"
          />
        </div>
      </div>
    </>
  );
};

export default ProductsDetail;
