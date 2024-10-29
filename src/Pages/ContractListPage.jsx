import React, { useState } from "react";
import ContractList from "../Components/Contract/ContractList";

const initialData = [
  {
    id: 1,
    name: "علیرضا سرکار",
    date: "۱۳۸۱/۰۵/۲۲",
    amount: "۴۵۰۰۰۰۰۰",
    status: "فعال",
  },
  {
    id: 2,
    name: "احمدرضا درزی",
    date: "۱۳۸۲/۰۳/۱۹",
    amount: "۵۰۰۰۰۰۰۰",
    status: "غیرفعال",
  },
  {
    id: 3,
    name: "محمد رودباری",
    date: "۱۳۸۳/۰۸/۰۲",
    amount: "۶۲۰۰۰۰۰۰",
    status: "فعال",
  },
  {
    id: 4,
    name: "سجاد باقریان",
    date: "۱۳۸۴/۰۱/۰۹",
    amount: "۷۰۰۰۰۰۰۰",
    status: "غیرفعال",
  },
  {
    id: 5,
    name: "فرزاد کریمی",
    date: "۱۳۸۲/۱۰/۰۷",
    amount: "۳۲۰۰۰۰۰۰",
    status: "فعال",
  },
  {
    id: 6,
    name: "حسین احمدی",
    date: "۱۳۸۱/۱۲/۱۵",
    amount: "۵۵۰۰۰۰۰۰",
    status: "غیرفعال",
  },
  {
    id: 7,
    name: "مهدی علوی",
    date: "۱۳۸۳/۰۶/۲۵",
    amount: "۴۲۰۰۰۰۰۰",
    status: "فعال",
  },
  {
    id: 8,
    name: "پرهام حسینی",
    date: "۱۳۸۴/۰۲/۱۷",
    amount: "۶۸۰۰۰۰۰۰",
    status: "فعال",
  },
];

const columns = [
  { id: "name", label: "نام و نام خانوادگی" },
  { id: "date", label: "تاریخ ثبت" },
  { id: "amount", label: "مبلغ قرارداد" },
  { id: "status", label: "وضعیت قرارداد" },
];

const ContractListPage = () => {
  const [data, setData] = useState(initialData);
  return <ContractList data={data} columns={columns} />;
};

export default ContractListPage;
