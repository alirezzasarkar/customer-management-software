import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { getCustomerDetail, updateCustomer } from "../Services/APIs/Customers";
import CustomersEdit from "./../Components/Customers/CustomersEdit";
import Loading from "./../Components/Common/Loading";
import { useNavigate, useParams } from "react-router-dom";

const CustomersEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    full_name: "",
    national_id: "",
    email: "",
    phone: "",
    birth_date: "",
    instagram: "",
    telegram: "",
    customer_picture: null,
    customer_picture_url: "",
    buyer_rank: "",
    address: "",
    description: "",
  });
  const [loading, setLoading] = useState(true);

  const [buyer_rank] = useState([
    { id: "RE", name: "قرمز" },
    { id: "GR", name: "طوسی" },
    { id: "GO", name: "طلایی" },
    { id: "SS", name: "سوپر ویژه" },
  ]);
  const [selectedbuyer_rank, setSelectedbuyer_rank] = useState(null);

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const customerData = await getCustomerDetail(id);

        setFormData({
          full_name: customerData.full_name || "",
          national_id: customerData.national_id || "",
          email: customerData.email || "",
          phone: customerData.phone_number || "",
          birth_date: customerData.date_of_birth
            ? new Date(customerData.date_of_birth).toISOString().split("T")[0]
            : "",
          instagram: customerData.instagram_id || "",
          telegram: customerData.telegram_id || "",
          customer_picture: null,
          customer_picture_url: customerData.customer_picture || "",
          buyer_rank: customerData.buyer_rank || "",
          address: customerData.address || "",
          description: customerData.description || "",
        });

        setSelectedbuyer_rank(
          buyer_rank.find((rank) => rank.id === customerData.buyer_rank)
        );
        setLoading(false);
      } catch (error) {
        console.error("Error fetching customer data:", error);
        Swal.fire({
          icon: "error",
          title: "خطا",
          text: "مشکلی در واکشی داده‌های مشتری وجود داشت.",
        });
        setLoading(false);
      }
    };

    fetchCustomer();
  }, [id, buyer_rank]);

  const handleInputChange = (field, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleProfilePictureUpload = (file) => {
    setFormData((prevState) => ({
      ...prevState,
      customer_picture: file,
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
      national_id: formData.national_id || null,
      email: formData.email,
      phone_number: formData.phone,
      date_of_birth: formattedDate || null,
      instagram_id: formData.instagram,
      telegram_id: formData.telegram,
      address: formData.address,
      description: formData.description,
      buyer_rank: formData.buyer_rank,
    };

    try {
      await updateCustomer(id, payload);
      Swal.fire({
        icon: "success",
        title: "ویرایش موفق!",
        text: "پروفایل مشتری با موفقیت به‌روزرسانی شد.",
      }).then(() => {
        navigate("/dashboard/customers/list");
      });
    } catch (error) {
      console.error("Error updating customer profile:", error);
      const errorResponse = error.response?.data;

      let errorMsg = "مشکلی در به‌روزرسانی پروفایل مشتری وجود داشت.";
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
    <CustomersEdit
      formData={formData}
      onInputChange={handleInputChange}
      onSubmit={handleSubmit}
      onProfilePictureUpload={handleProfilePictureUpload}
      buyer_rank={buyer_rank}
      selectedbuyer_rank={selectedbuyer_rank}
      onbuyer_rankSelect={handlebuyer_rankSelect}
    />
  );
};

export default CustomersEditPage;
