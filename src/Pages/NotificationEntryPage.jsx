import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import NotificationEntry from "../Components/Notification/NotificationEntry";
import { getCustomers } from "../Services/APIs/Customers";
import { addNotices } from "../Services/APIs/Notification";

const NotificationEntryPage = () => {
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

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const customersData = await getCustomers();
        const formattedCustomers = customersData.map((customer) => ({
          id: customer.id,
          name: customer.full_name,
        }));
        setCustomers(formattedCustomers);
      } catch (error) {
        console.error("Error fetching customers:", error);
      }
    };

    fetchCustomers();
  }, []);

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

    const { send_hour, send_minute, title, send_date, text, audiences } =
      formData;

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
      task_id: formData.task_id || "default-task-id",
      audiences: audiences.length ? audiences : [0],
    };

    console.log("Payload:", payload);

    try {
      await addNotices(payload);
      Swal.fire({
        icon: "success",
        title: "پیام با موفقیت ارسال شد!",
        text: "پیام شما به مخاطبین مورد نظر ارسال گردید.",
      });

      setFormData({
        title: "",
        send_date: "",
        send_hour: "",
        send_minute: "",
        text: "",
        audiences: [],
        task_id: "",
      });
    } catch (error) {
      console.error("Error sending notification:", error);
      Swal.fire({
        icon: "error",
        title: "خطا",
        text: "مشکلی در ارسال پیام وجود داشت.",
      });
    }
  };

  return (
    <div>
      <NotificationEntry
        customers={customers}
        onCustomerSelect={handleCustomerSelect}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
        formData={formData}
      />
    </div>
  );
};

export default NotificationEntryPage;
