import { useState } from "react";
import Swal from "sweetalert2";
import ProductListEntry from "../Components/Products/ProductListEntry";
import { addProducts } from "../Services/APIs/Products";

const ProductEntryPage = () => {
  const [statuses] = useState([
    { id: "active", name: "فعال" },
    { id: "inactive", name: "غیرفعال" },
    { id: "default", name: "پیش‌فرض" },
  ]);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [formData, setFormData] = useState({
    productName: "",
    productColor: "",
    productSize: "",
    productPrice: "",
    productDescription: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleStatusSelect = (status) => {
    setSelectedStatus(status);
  };

  const handleImageUpload = (images) => {
    console.log("Uploaded images:", images);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      product_name: String(formData.productName),
      price: parseFloat(formData.productPrice),
      status: selectedStatus?.id === "active",
      size: parseFloat(formData.productSize),
      color: String(formData.productColor),
      product_image: null,
      description: String(formData.productDescription),
      category: [],
    };

    try {
      await addProducts(payload);
      Swal.fire({
        icon: "success",
        title: "ثبت موفق!",
        text: "محصول با موفقیت ثبت شد.",
      });
    } catch (error) {
      console.error("Error submitting product:", error);
      Swal.fire({
        icon: "error",
        title: "خطا",
        text: "مشکلی در ثبت محصول وجود داشت.",
      });
    }
  };

  return (
    <ProductListEntry
      statuses={statuses}
      onStatusSelect={handleStatusSelect}
      onInputChange={handleInputChange}
      onImageUpload={handleImageUpload}
      onSubmit={handleSubmit}
      formData={formData}
    />
  );
};

export default ProductEntryPage;
