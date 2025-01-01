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
    send_time: "",
    text: "",
    audiences: [],
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

    const formattedDate = formData.send_date
      ? new Date(formData.send_date).toISOString().split("T")[0]
      : "";

    const formattedDateTime =
      formData.send_date && formData.send_time
        ? `${formattedDate}T${formData.send_time}`
        : "";

    const payload = {
      title: formData.title,
      send_datetime: formattedDateTime, // ترکیب تاریخ و زمان
      text: formData.text,
      audiences: formData.audiences,
    };

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
        send_time: "",
        text: "",
        audiences: [],
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
