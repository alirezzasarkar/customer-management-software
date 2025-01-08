import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import ProductListEntry from "../Components/Products/ProductListEntry";
import { addProducts, getCategory } from "../Services/APIs/Products";

const ProductEntryPage = () => {
  const [statuses] = useState([
    { id: true, name: "موجود" },
    { id: false, name: "ناموجود" },
  ]);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [formData, setFormData] = useState({
    productName: "",
    productColor: "",
    productSize: "",
    productPrice: "",
    productDescription: "",
    brand: "",
    category: [],
  });
  const [productImage, setProductImage] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategory();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
        Swal.fire({
          icon: "error",
          title: "خطا",
          text: "در بارگذاری دسته‌بندی‌ها مشکلی رخ داد.",
        });
      } finally {
        setLoadingCategories(false);
      }
    };
    fetchCategories();
  }, []);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleStatusSelect = (status) => {
    setSelectedStatus(status);
  };

  const handleImageUpload = (file) => {
    setProductImage(file);
  };

  const handleCategorySelect = (selectedCategories) => {
    const categoryIds = selectedCategories.map((cat) => cat.id);
    setFormData((prev) => ({
      ...prev,
      category: categoryIds,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedStatus) {
      Swal.fire({
        icon: "warning",
        title: "وضعیت انتخاب نشده",
        text: "لطفاً وضعیت محصول را انتخاب کنید.",
      });
      return;
    }
    const formPayload = new FormData();
    formPayload.append("product_name", formData.productName);
    formPayload.append("brand", formData.brand);
    formPayload.append("price", parseFloat(formData.productPrice) || 0);
    formPayload.append("status", selectedStatus.id);
    formPayload.append("size", formData.productSize);
    formPayload.append("color", formData.productColor);
    formPayload.append("description", formData.productDescription);
    formData.category.forEach((catId) => {
      formPayload.append("category", catId);
    });
    if (productImage) {
      formPayload.append("product_image", productImage);
    }
    try {
      await addProducts(formPayload);
      Swal.fire({
        icon: "success",
        title: "ثبت موفق!",
        text: "محصول با موفقیت ثبت شد.",
      });
      setFormData({
        productName: "",
        brand: "",
        productColor: "",
        productSize: "",
        productPrice: "",
        productDescription: "",
        category: [],
      });
      setSelectedStatus(null);
      setProductImage(null);
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
      categories={categories}
      statuses={statuses}
      onStatusSelect={handleStatusSelect}
      onInputChange={handleInputChange}
      onImageUpload={handleImageUpload}
      onCategorySelect={handleCategorySelect}
      onSubmit={handleSubmit}
      formData={formData}
      selectedStatus={selectedStatus}
      loadingCategories={loadingCategories}
    />
  );
};

export default ProductEntryPage;
