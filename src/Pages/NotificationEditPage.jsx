import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { getNoticeDetail, updateNotice } from "../Services/APIs/Notification";
import NotificationEdit from "../Components/Notification/NotificationEdit";
import Loading from "./../Components/Common/Loading";
import { getCustomers } from "../Services/APIs/Customers";

const NotificationEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [customers, setCustomers] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    send_date: "",
    send_hour: "",
    send_minute: "",
    text: "",
    audiences: [],
    task_id: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const noticeData = await getNoticeDetail(id);

        const customersData = await getCustomers();
        const formattedCustomers = customersData.map((customer) => ({
          id: customer.id,
          name: customer.full_name,
        }));
        setCustomers(formattedCustomers);

        const [hour, minute, second] = noticeData.send_time.split(":");
        setFormData({
          title: noticeData.title || "",
          text: noticeData.text || "",
          send_date: noticeData.send_date || "",
          send_hour: hour || "",
          send_minute: minute || "",
          task_id: noticeData.task_id || "",
          audiences: noticeData.audiences || [],
        });

        setLoading(false);
      } catch (error) {
        console.error("Error fetching notice data:", error);
        Swal.fire({
          icon: "error",
          title: "خطا",
          text: "مشکلی در واکشی داده‌های اطلاع‌رسانی وجود داشت.",
        });
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleInputChange = (field, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleCustomerSelect = (selectedItems) => {
    const audienceIds = selectedItems.map((item) => item.id);
    setFormData((prevState) => ({
      ...prevState,
      audiences: audienceIds,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      send_hour,
      send_minute,
      title,
      send_date,
      text,
      audiences,
      task_id,
    } = formData;

    if (
      !title ||
      !send_date ||
      !send_hour ||
      !send_minute ||
      !text ||
      audiences.length === 0
    ) {
      Swal.fire({
        icon: "error",
        title: "خطا",
        text: "لطفاً تمامی فیلدهای لازم را پر کنید.",
      });
      return;
    }

    const hourValid = /^([0-1]\d|2[0-3])$/.test(send_hour);
    const minuteValid = /^[0-5]\d$/.test(send_minute);

    if (!hourValid || !minuteValid) {
      Swal.fire({
        icon: "error",
        title: "خطا",
        text: "لطفاً زمان ارسال را به درستی وارد کنید (ساعت: 00-23، دقیقه: 00-59).",
      });
      return;
    }

    const formattedDate = new Date(send_date).toISOString().split("T")[0];

    const formattedTime = `${send_hour.padStart(2, "0")}:${send_minute.padStart(
      2,
      "0"
    )}:00Z`;

    const payload = {
      title,
      text,
      send_time: formattedTime,
      send_date: formattedDate,
      task_id: task_id || "default-task-id",
      audiences: audiences.length ? audiences : [0],
    };

    "Payload:", payload;

    try {
      await updateNotice(id, payload);
      Swal.fire({
        icon: "success",
        title: "ویرایش موفق!",
        text: "اطلاع‌رسانی با موفقیت به‌روزرسانی شد.",
      }).then(() => {
        navigate("/dashboard/notices");
      });
    } catch (error) {
      console.error("Error updating notice:", error);
      const errorResponse = error.response?.data;

      let errorMsg = "مشکلی در به‌روزرسانی اطلاع‌رسانی وجود داشت.";
      if (errorResponse) {
        const errors = Object.entries(errorResponse).map(
          ([key, value]) => `${key}: ${value.join(", ")}`
        );
        errorMsg = errors.join("\n");
      }

      Swal.fire({
        icon: "error",
        title: "خطا",
        text: errorMsg,
      });
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <NotificationEdit
      customers={customers}
      onCustomerSelect={handleCustomerSelect}
      onInputChange={handleInputChange}
      onSubmit={handleSubmit}
      formData={formData}
    />
  );
};

export default NotificationEditPage;
