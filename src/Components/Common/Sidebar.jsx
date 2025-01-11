import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SidebarItem from "./SidebarItem";
import { FiMenu, FiX } from "react-icons/fi";

const Sidebar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: "آیا مطمئن هستید؟",
      text: "پس از خروج، برای دسترسی مجدد نیاز به ورود دوباره دارید.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "بله، خارج شو",
      cancelButtonText: "لغو",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("token");
        navigate("/login");
      }
    });
  };

  return (
    <>
      <button
        className="md:hidden absolute top-6 left-4 z-50 bg-customBlue text-white p-2 rounded-md shadow-lg"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        {isMobileOpen ? (
          <FiX className="h-6 w-6" />
        ) : (
          <FiMenu className="h-6 w-6" />
        )}
      </button>

      <div
        className={`h-auto w-24 bg-customBlue top-0 right-0 z-40 transform ${
          isMobileOpen ? "translate-x-0 absolute" : "translate-x-full"
        } md:translate-x-0 md:relative absolute transition-transform duration-300 flex flex-col space-y-10 items-center py-4`}
      >
        <img src="/images/AdklayLogo.svg" alt="Logo" className="mb-4" />

        <SidebarItem
          to="/dashboard"
          icon="/images/Sidbar/dashboard.svg"
          label="داشبورد"
        />

        <SidebarItem
          to="/dashboard/sales-opportunities/list"
          icon="/images/Sidbar/sales-opportunities.svg"
          label="فرصت فروش"
          subItems={[
            {
              label: "ثبت فرصت فروش",
              to: "/dashboard/sales-opportunities/entry",
            },
            {
              label: "لیست فرصت های فروش",
              to: "/dashboard/sales-opportunities/list",
            },
          ]}
        />

        <SidebarItem
          to="/dashboard/marketing/list"
          icon="/images/Sidbar/marketing.svg"
          label="مارکتینگ"
          subItems={[
            { label: "ثبت کمپین", to: "/dashboard/marketing/entry" },
            { label: "لیست کمپین ها", to: "/dashboard/marketing/list" },
          ]}
        />

        <SidebarItem
          to="/dashboard/employees/list"
          icon="/images/Sidbar/employees.svg"
          label="کارمندان"
          subItems={[
            { label: "ثبت کارمند", to: "/dashboard/employees/entry" },
            { label: "لیست کارمندان", to: "/dashboard/employees/list" },
          ]}
        />

        <SidebarItem
          to="/dashboard/customers/list"
          icon="/images/Sidbar/customer.svg"
          label="مشتریان"
          subItems={[
            { label: "ثبت مشتری", to: "/dashboard/customers/entry" },
            { label: "لیست مشتریان", to: "/dashboard/customers/list" },
          ]}
        />

        <SidebarItem
          to="/dashboard/notification/list"
          icon="/images/Sidbar/notification.svg"
          label="اطلاع رسانی"
          subItems={[
            { label: "ارسال پیام", to: "/dashboard/notification/entry" },
            { label: "لیست پیام ها", to: "/dashboard/notification/list" },
          ]}
        />

        <SidebarItem
          to="/dashboard/products/list"
          icon="/images/Sidbar/product.svg"
          label="محصولات"
          subItems={[
            { label: "ثبت محصول", to: "/dashboard/products/entry" },
            { label: "لیست محصولات", to: "/dashboard/products/list" },
          ]}
        />

        <SidebarItem
          to="/dashboard/invoice/list"
          icon="/images/Sidbar/invoice.svg"
          label="فاکتور"
          subItems={[
            { label: "ثبت فاکتور", to: "/dashboard/invoice/entry" },
            { label: "لیست فاکتور ها", to: "/dashboard/invoice/list" },
          ]}
        />

        <div
          className="cursor-pointer flex flex-col items-center "
          onClick={handleLogout}
        >
          <img
            src="/images/Sidbar/log-out.svg"
            alt="Logout Icon"
            className="mb-1 h-6 w-6"
          />
          <span className="text-white text-xs">خروج</span>
        </div>
      </div>
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
