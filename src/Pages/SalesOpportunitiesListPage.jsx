import React, { useState } from "react";
import SalesOpportunitiesList from "../Components/SalesOpportunities/SalesOpportunitiesList";

const initialData = [
  {
    id: 1,
    fullName: "علیرضا حسینی",
    opportunityPriority: "بالا",
    totalAmount: "۷۵۰۰۰۰۰۰",
    followUpDate: "۱۴۰۲/۰۸/۱۰",
  },
  {
    id: 2,
    fullName: "سارا محمدی",
    opportunityPriority: "متوسط",
    totalAmount: "۶۰۰۰۰۰۰۰",
    followUpDate: "۱۴۰۲/۰۸/۱۵",
  },
  {
    id: 3,
    fullName: "احمد رضاپور",
    opportunityPriority: "پایین",
    totalAmount: "۴۵۰۰۰۰۰۰",
    followUpDate: "۱۴۰۲/۰۸/۲۰",
  },
  {
    id: 4,
    fullName: "مریم کریمی",
    opportunityPriority: "بالا",
    totalAmount: "۸۵۰۰۰۰۰۰",
    followUpDate: "۱۴۰۲/۰۹/۰۱",
  },
  {
    id: 5,
    fullName: "رضا احمدی",
    opportunityPriority: "متوسط",
    totalAmount: "۵۵۰۰۰۰۰۰",
    followUpDate: "۱۴۰۲/۰۹/۰۵",
  },
  {
    id: 6,
    fullName: "فاطمه یوسفی",
    opportunityPriority: "پایین",
    totalAmount: "۳۲۰۰۰۰۰۰",
    followUpDate: "۱۴۰۲/۰۹/۱۰",
  },
  {
    id: 7,
    fullName: "مهدی علوی",
    opportunityPriority: "بالا",
    totalAmount: "۹۰۰۰۰۰۰۰",
    followUpDate: "۱۴۰۲/۰۹/۱۵",
  },
  {
    id: 8,
    fullName: "پرهام حسینی",
    opportunityPriority: "متوسط",
    totalAmount: "۶۷۰۰۰۰۰۰",
    followUpDate: "۱۴۰۲/۰۹/۲۰",
  },
];

const columns = [
  { id: "fullName", label: "نام و نام خانوادگی" },
  { id: "opportunityPriority", label: "اولویت فرصت" },
  { id: "totalAmount", label: "مبلغ کل" },
  { id: "followUpDate", label: "تاریخ پیگیری" },
];

const SalesOpportunitiesListPage = () => {
  const [data, setData] = useState(initialData);
  return <SalesOpportunitiesList data={data} columns={columns} />;
};

export default SalesOpportunitiesListPage;
