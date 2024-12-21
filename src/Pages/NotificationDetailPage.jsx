import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NotificationDetail from "../Components/Notification/NotificationDetail";
import Loading from "../Components/Common/Loading";
import { getNoticeDetail } from "../Services/APIs/Notification";
import { getCustomers } from "./../Services/APIs/Customers";
import { convertToShamsi } from "../Utils/convertToShamsi";

const NotificationDetailPage = () => {
  const { id } = useParams(); // گرفتن ID از URL
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [noticeDetail, audienceList] = await Promise.all([
          getNoticeDetail(id),
          getCustomers(),
        ]);

        const audienceMap = audienceList.reduce((acc, audience) => {
          acc[audience.id] = audience.full_name;
          return acc;
        }, {});

        const convertedData = {
          ...noticeDetail,
          send_date: convertToShamsi(noticeDetail.send_date),
          audiences: noticeDetail.audiences
            .map((audienceId) => audienceMap[audienceId] || "نامشخص")
            .join(", "),
        };

        setData(convertedData);
      } catch (error) {
        console.error("Error fetching notice detail:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return <>{loading ? <Loading /> : <NotificationDetail data={data} />}</>;
};

export default NotificationDetailPage;
