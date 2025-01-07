import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NotificationDetail from "../Components/Notification/NotificationDetail";
import Loading from "../Components/Common/Loading";
import { getNoticeDetail, deleteNotice } from "../Services/APIs/Notification";
import { getCustomers } from "./../Services/APIs/Customers";
import { convertToShamsi } from "../Utils/convertToShamsi";
import Swal from "sweetalert2";

const NotificationDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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

  const handleDelete = () => {
    Swal.fire({
      title: "آیا مطمئن هستید؟",
      text: "این عملیات قابل بازگشت نیست!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "بله، حذف شود!",
      cancelButtonText: "لغو",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteNotice(id)
          .then(() => {
            Swal.fire("حذف شد!", "پیام با موفقیت حذف شد.", "success");
            navigate("/dashboard/notification/list"); // انتقال به صفحه لیست
          })
          .catch((error) => {
            console.error("Error deleting notice:", error);
            Swal.fire("خطا!", "مشکلی در حذف پیام وجود داشت.", "error");
          });
      }
    });
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <NotificationDetail data={data} onDelete={handleDelete} />
      )}
    </>
  );
};

export default NotificationDetailPage;
