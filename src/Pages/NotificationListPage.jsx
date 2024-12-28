import React, { useEffect, useState } from "react";
import Loading from "../Components/Common/Loading";
import NotificationList from "../Components/Notification/NotificationList";
import { getCustomers } from "../Services/APIs/Customers";
import { getNotices } from "../Services/APIs/Notification";
import { convertToShamsi } from "../Utils/convertToShamsi";

const columns = [
  { id: "audiences", label: "مخاطبین" },
  { id: "send_date", label: "تاریخ ارسال" },
  { id: "send_time", label: "زمان ارسال" },
];

const NotificationListPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [notices, customers] = await Promise.all([
          getNotices(),
          getCustomers(),
        ]);

        const customerMap = customers.reduce((acc, customer) => {
          acc[customer.id] = customer.full_name;
          return acc;
        }, {});

        const processedData = notices.map((notice) => ({
          ...notice,
          audiences: notice.audiences
            .map((id) => customerMap[id] || "نامشخص")
            .join("، "),
          send_date: convertToShamsi(notice.send_date),
        }));

        setData(processedData);
      } catch (error) {
        console.error("Failed to fetch notices or customers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <NotificationList data={data} columns={columns} />
      )}
    </div>
  );
};

export default NotificationListPage;
