import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import NotificationEntry from "../Components/Notification/NotificationEntry";
import { getCustomers } from "../Services/APIs/Customers";
import { addNotices } from "../Services/APIs/Notification";

const NotificationEntryPage = () => {
  const [customers, setCustomers] = useState([]);
  const [formData, setFormData] = useState({
    send_date: "",
    send_time: "",
    text: "",
  });
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const customersData = await getCustomers();
        // Ensure customers are formatted properly with `id` and `full_name`
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

  const handleCustomerSelect = (customer) => {
    setSelectedCustomer(customer);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formattedDate = new Date(formData.send_date)
      .toISOString()
      .split("T")[0]; // Extract only the date part

    // Ensure send_time is formatted as HH:mm:ss
    const time = new Date(formData.send_time); // Convert to a Date object if it's a timestamp
    const formattedTime = time
      .toISOString()
      .split("T")[1] // Extract time from the full ISO string
      .split(".")[0];

    const payload = {
      title: selectedCustomer?.id || "",
      send_date: formattedDate,
      send_time: formattedTime,
      text: formData.text,
    };

    try {
      await addNotices(payload);
      Swal.fire({
        icon: "success",
        title: "پیام با موفقیت ارسال شد!",
        text: "پیام شما به مخاطب مورد نظر ارسال گردید.",
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
        customers={customers} // Ensure `customers` is in the correct format
        onCustomerSelect={handleCustomerSelect}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
        formData={formData}
      />
    </div>
  );
};

export default NotificationEntryPage;
