import React, { useState } from "react";
import CustomerList from "../Components/Customers/CustomerList";

const initialData = [
  {
    id: 1,
    full_name: "علیرضا حسینی",
    phone_number: "09123456789",
    email: "alireza.hosseini@example.com",
  },
  {
    id: 2,
    full_name: "سارا محمدی",
    phone_number: "09121234567",
    email: "sara.mohammadi@example.com",
  },
  {
    id: 3,
    full_name: "احمد رضاپور",
    phone_number: "09127654321",
    email: "ahmad.rezapour@example.com",
  },
  {
    id: 4,
    full_name: "مریم کریمی",
    phone_number: "09351237890",
    email: "maryam.karimi@example.com",
  },
  {
    id: 5,
    full_name: "رضا احمدی",
    phone_number: "09129876543",
    email: "reza.ahmadi@example.com",
  },
  {
    id: 6,
    full_name: "فاطمه یوسفی",
    phone_number: "09123451234",
    email: "fatemeh.yousefi@example.com",
  },
  {
    id: 7,
    full_name: "مهدی علوی",
    phone_number: "09358974123",
    email: "mahdi.alavi@example.com",
  },
  {
    id: 8,
    full_name: "پرهام حسینی",
    phone_number: "09121112233",
    email: "parham.hosseini@example.com",
  },
];

const columns = [
  { id: "full_name", label: "نام و نام خانوادگی" },
  { id: "phone_number", label: "شماره تماس" },
  { id: "email", label: "ایمیل" },
];

const CustomerListPage = () => {
  const [data, setData] = useState(initialData);
  return <CustomerList data={data} columns={columns} />;
};

export default CustomerListPage;
