import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import CustomersEntry from "../Components/Customers/CustomersEntry";
import { addCustomers, getCustomers } from "../Services/APIs/Customers";

const CustomersEntryPage = () => {
  const [customers, setCustomers] = useState([]);

  const [buyer_rank] = useState([
    { id: "BR", name: "برنزی" },
    { id: "SI", name: "نقره ای" },
    { id: "GO", name: "طلایی" },
  ]);

  const [selectedbuyer_rank, setSelectedbuyer_rank] = useState(null);

  const [formData, setFormData] = useState({
    full_name: "",
    national_id: "",
    email: "",
    phone: "",
    birth_date: "",
    instagram: "",
    telegram: "",
    address: "",
    description: "",
    buyer_rank: "",
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

  const handlebuyer_rankSelect = (buyer_rank) => {
    setSelectedbuyer_rank(buyer_rank);
    handleInputChange("buyer_rank", buyer_rank.id);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formattedDate = formData.birth_date
      ? new Date(formData.birth_date).toISOString().split("T")[0]
      : "";

    const payload = {
      full_name: formData.full_name,
      national_id: formData.national_id || "",
      email: formData.email,
      phone_number: formData.phone,
      date_of_birth: formattedDate || "",
      instagram_id: formData.instagram,
      telegram_id: formData.telegram,
      address: formData.address,
      description: formData.description,
      buyer_rank: formData.buyer_rank,
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
      buyer_rank={buyer_rank}
      onbuyer_rankSelect={handlebuyer_rankSelect}
      selectedbuyer_rank={selectedbuyer_rank}
    />
  );
};

export default CustomersEntryPage;
