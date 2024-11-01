import React, { useState } from "react";
import EmployeeList from "../Components/Employees/EmployeeList";

const initialData = [
  {
    id: 1,
    fullName: "علیرضا حسینی",
    phoneNumber: "09123456789",
    jobTitle: "مدیر فروش",
  },
  {
    id: 2,
    fullName: "سارا محمدی",
    phoneNumber: "09121234567",
    jobTitle: "کارشناس بازاریابی",
  },
  {
    id: 3,
    fullName: "احمد رضاپور",
    phoneNumber: "09127654321",
    jobTitle: "کارشناس مالی",
  },
  {
    id: 4,
    fullName: "مریم کریمی",
    phoneNumber: "09351237890",
    jobTitle: "مدیر منابع انسانی",
  },
  {
    id: 5,
    fullName: "رضا احمدی",
    phoneNumber: "09129876543",
    jobTitle: "مدیر پروژه",
  },
  {
    id: 6,
    fullName: "فاطمه یوسفی",
    phoneNumber: "09123451234",
    jobTitle: "کارشناس پشتیبانی",
  },
  {
    id: 7,
    fullName: "مهدی علوی",
    phoneNumber: "09358974123",
    jobTitle: "طراح گرافیک",
  },
  {
    id: 8,
    fullName: "پرهام حسینی",
    phoneNumber: "09121112233",
    jobTitle: "برنامه‌نویس",
  },
];

const columns = [
  { id: "fullName", label: "نام و نام خانوادگی" },
  { id: "phoneNumber", label: "شماره تماس" },
  { id: "jobTitle", label: "سمت شغلی" },
];

const EmployeeListPage = () => {
  const [data, setData] = useState(initialData);
  return <EmployeeList data={data} columns={columns} />;
};

export default EmployeeListPage;
