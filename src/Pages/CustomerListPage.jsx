import React, { useState } from "react";
import CustomerList from "../Components/Customers/CustomerList";

const initialData = [
  {
    id: 1,
    fullName: "علیرضا حسینی",
    phoneNumber: "09123456789",
    email: "alireza.hosseini@example.com",
  },
  {
    id: 2,
    fullName: "سارا محمدی",
    phoneNumber: "09121234567",
    email: "sara.mohammadi@example.com",
  },
  {
    id: 3,
    fullName: "احمد رضاپور",
    phoneNumber: "09127654321",
    email: "ahmad.rezapour@example.com",
  },
  {
    id: 4,
    fullName: "مریم کریمی",
    phoneNumber: "09351237890",
    email: "maryam.karimi@example.com",
  },
  {
    id: 5,
    fullName: "رضا احمدی",
    phoneNumber: "09129876543",
    email: "reza.ahmadi@example.com",
  },
  {
    id: 6,
    fullName: "فاطمه یوسفی",
    phoneNumber: "09123451234",
    email: "fatemeh.yousefi@example.com",
  },
  {
    id: 7,
    fullName: "مهدی علوی",
    phoneNumber: "09358974123",
    email: "mahdi.alavi@example.com",
  },
  {
    id: 8,
    fullName: "پرهام حسینی",
    phoneNumber: "09121112233",
    email: "parham.hosseini@example.com",
  },
];

const columns = [
  { id: "fullName", label: "نام و نام خانوادگی" },
  { id: "phoneNumber", label: "شماره تماس" },
  { id: "email", label: "ایمیل" },
];

const CustomerListPage = () => {
  const [data, setData] = useState(initialData);
  return <CustomerList data={data} columns={columns} />;
};

export default CustomerListPage;
