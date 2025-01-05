// src/Components/Employees/EmployeeDetail.jsx
import React, { useState } from "react";
import Title from "../Common/Title";
import DashboardButton from "../Common/DashboardButton";
import { useNavigate } from "react-router-dom";
import { deleteEmployee } from "../../Services/APIs/Employees"; // وارد کردن تابع حذف
import Swal from "sweetalert2"; // اطمینان از نصب کتابخانه

const EmployeeDetail = ({ data }) => {
  const {
    id, // اضافه کردن id
    picture,
    full_name,
    work_position,
    department,
    phone_number,
    email,
    date_of_assignment,
    telegram_id,
  } = data;

  const navigate = useNavigate();
  const [isDeleting, setIsDeleting] = useState(false); // حالت در حال حذف

  const handleEditClick = () => {
    navigate(`/dashboard/employees/edit/${id}`);
  };

  const handleDeleteClick = () => {
    Swal.fire({
      title: "آیا مطمئن هستید؟",
      text: "این عملیات غیرقابل بازگشت است!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "بله، حذف کن!",
      cancelButtonText: "لغو",
    }).then((result) => {
      if (result.isConfirmed) {
        performDelete();
      }
    });
  };

  const performDelete = async () => {
    setIsDeleting(true);
    try {
      await deleteEmployee(id);
      Swal.fire("حذف شد!", "پروفایل کارمند با موفقیت حذف شد.", "success").then(
        () => {
          navigate("/dashboard/employees/list"); // هدایت به لیست کارمندان
        }
      );
    } catch (error) {
      Swal.fire("خطا!", "مشکلی در حذف پروفایل کارمند وجود داشت.", "error");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      <Title title="جزئیات پروفایل کارمند" />
      <div className="bg-gray-100 p-10 mx-6 rounded-md">
        <div className="flex flex-col items-center mb-10">
          <img
            src={picture || "https://via.placeholder.com/100"}
            alt="Employee"
            className="w-24 h-24 rounded-full bg-gray-200"
          />
        </div>

        <div className="grid grid-cols-3 gap-4 mb-8">
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
            onClick={handleDeleteClick} // اضافه کردن هندلر حذف
            disabled={isDeleting} // غیرفعال کردن دکمه در حال حذف
          />
        </div>
      </div>
    </>
  );
};

export default EmployeeDetail;
