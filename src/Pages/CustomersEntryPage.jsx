import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import CustomersEntry from "../Components/Customers/CustomersEntry";
import { addCustomers, getCustomers } from "../Services/APIs/Customers";

const CustomersEntryPage = () => {
  const [customers, setCustomers] = useState([]);
  const [formData, setFormData] = useState({
    full_name: "",
    national_id: "",
    email: "",
    phone: "",
    birth_date: "",
    instagram: "",
    telegram: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formattedDate = formData.birth_date
      ? new Date(formData.birth_date).toISOString().split("T")[0]
      : "";

    const payload = {
      full_name: formData.full_name,
      national_id: formData.national_id,
      email: formData.email,
      phone_number: formData.phone,
      birth_date: formattedDate,
      instagram: formData.instagram,
      telegram: formData.telegram,
    };

    try {
      await addCustomers(payload);
      console.log("Submitting customer data:", payload);
      Swal.fire({
        icon: "success",
        title: "ثبت موفق!",
        text: "پروفایل مشتری با موفقیت ثبت شد.",
      });
    } catch (error) {
      console.error("Error submitting customer data:", error);
      Swal.fire({
        icon: "error",
        title: "خطا",
        text: "مشکلی در ثبت پروفایل مشتری وجود داشت.",
      });
    }
  };

  return (
    <CustomersEntry
      formData={formData}
      onInputChange={handleInputChange}
      onSubmit={handleSubmit}
    />
  );
};

export default CustomersEntryPage;
