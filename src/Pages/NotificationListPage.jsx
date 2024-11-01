import React, { useState } from "react";
import NotificationList from "../Components/Notification/NotificationList";

const initialData = [
  {
    id: 1,
    recipients: "علی احمدی، سارا محمدی",
    sendDate: "۱۴۰۲/۰۸/۱۰",
    sendTime: "۱۰:۳۰",
  },
  {
    id: 2,
    recipients: "مهدی رضایی، نرگس کریمی",
    sendDate: "۱۴۰۲/۰۸/۱۵",
    sendTime: "۱۲:۴۵",
  },
  {
    id: 3,
    recipients: "زهرا عباسی، محمد موسوی",
    sendDate: "۱۴۰۲/۰۸/۲۰",
    sendTime: "۰۹:۰۰",
  },
  {
    id: 4,
    recipients: "حسین صادقی، لیلا شریفی",
    sendDate: "۱۴۰۲/۰۹/۰۱",
    sendTime: "۱۴:۱۵",
  },
  {
    id: 5,
    recipients: "مجید حسینی، پریسا نوری",
    sendDate: "۱۴۰۲/۰۹/۰۵",
    sendTime: "۱۶:۰۰",
  },
  {
    id: 6,
    recipients: "الهام قاسمی، فرید کاظمی",
    sendDate: "۱۴۰۲/۰۹/۱۰",
    sendTime: "۱۳:۳۰",
  },
  {
    id: 7,
    recipients: "حسن محمدی، مریم رشیدی",
    sendDate: "۱۴۰۲/۰۹/۱۵",
    sendTime: "۱۱:۱۵",
  },
  {
    id: 8,
    recipients: "کامران احمدی، فاطمه صالحی",
    sendDate: "۱۴۰۲/۰۹/۲۰",
    sendTime: "۰۸:۴۵",
  },
];

const columns = [
  { id: "recipients", label: "مخاطبین" },
  { id: "sendDate", label: "تاریخ ارسال" },
  { id: "sendTime", label: "زمان ارسال" },
];

const NotificationListPage = () => {
  const [data, setData] = useState(initialData);
  return <NotificationList data={data} columns={columns} />;
};

export default NotificationListPage;
