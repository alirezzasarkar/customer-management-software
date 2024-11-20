import React, { useState } from "react";
import SidebarItem from "./SidebarItem";
import { FiMenu, FiX } from "react-icons/fi";

const Sidebar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

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
        <img
          src="/src/Assets/Icons/AdklayLogo.svg"
          alt="Logo"
          className="mb-4"
        />

        <SidebarItem
          to="/dashboard"
          icon="/src/Assets/Icons/Sidbar/dashboard.svg"
          label="داشبورد"
        />

        <SidebarItem
          to="/dashboard/sales-opportunities/list"
          icon="/src/Assets/Icons/Sidbar/sales-opportunities.svg"
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
          icon="/src/Assets/Icons/Sidbar/marketing.svg"
          label="مارکتینگ"
          subItems={[
            { label: "ثبت کمپین", to: "/dashboard/marketing/entry" },
            { label: "لیست کمپین ها", to: "/dashboard/marketing/list" },
          ]}
        />

        <SidebarItem
          to="/dashboard/employees/list"
          icon="/src/Assets/Icons/Sidbar/employees.svg"
          label="کارمندان"
          subItems={[
            { label: "ثبت کارمند", to: "/dashboard/employees/entry" },
            { label: "لیست کارمندان", to: "/dashboard/employees/list" },
          ]}
        />

        <SidebarItem
          to="/dashboard/customers/list"
          icon="/src/Assets/Icons/Sidbar/customer.svg"
          label="مشتریان"
          subItems={[
            { label: "ثبت مشتری", to: "/dashboard/customers/entry" },
            { label: "لیست مشتریان", to: "/dashboard/customers/list" },
          ]}
        />

        <SidebarItem
          to="/dashboard/notification/list"
          icon="/src/Assets/Icons/Sidbar/notification.svg"
          label="اطلاع رسانی"
          subItems={[
            { label: "ارسال پیام", to: "/dashboard/notification/entry" },
            { label: "لیست پیام ها", to: "/dashboard/notification/list" },
          ]}
        />

        <SidebarItem
          to="/dashboard/products/list"
          icon="/src/Assets/Icons/Sidbar/product.svg"
          label="محصولات"
          subItems={[
            { label: "ثبت محصول", to: "/dashboard/products/entry" },
            { label: "لیست محصولات", to: "/dashboard/products/list" },
          ]}
        />

        <SidebarItem
          to="/dashboard/invoice/list"
          icon="/src/Assets/Icons/Sidbar/invoice.svg"
          label="فاکتور"
          subItems={[
            { label: "ثبت فاکتور", to: "/dashboard/invoice/entry" },
            { label: "لیست فاکتور ها", to: "/dashboard/invoice/list" },
          ]}
        />

        <SidebarItem
          to="/dashboard/pre-invoice/list"
          icon="/src/Assets/Icons/Sidbar/pre-invoice.svg"
          label="پیش فاکتور"
          subItems={[
            { label: "ثبت پیش فاکتور", to: "/dashboard/pre-invoice/entry" },
            { label: "لیست پیش فاکتور ها", to: "/dashboard/pre-invoice/list" },
          ]}
        />

        <SidebarItem
          to="/"
          icon="/src/Assets/Icons/Sidbar/log-out.svg"
          label="خروج"
        />
      </div>
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsMobileOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
