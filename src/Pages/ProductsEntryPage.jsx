// ProductEntryPage.jsx
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
    category: [], // آرایه‌ای از شناسه‌های دسته‌بندی
  });
  const [images, setImages] = useState([]); // ذخیره تصاویر آپلود شده
  const [categories, setCategories] = useState([]); // ذخیره دسته‌بندی‌ها
  const [loadingCategories, setLoadingCategories] = useState(true); // وضعیت بارگذاری دسته‌بندی‌ها

  // دریافت دسته‌بندی‌ها از API
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
    setFormData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleStatusSelect = (status) => {
    setSelectedStatus(status);
  };

  const handleImageUpload = (uploadedImages) => {
    setImages(uploadedImages); // ذخیره تصاویر آپلود شده
    console.log("Uploaded images:", uploadedImages);
  };

  const handleCategorySelect = (selectedCategories) => {
    // selectedCategories باید آرایه‌ای از اشیاء دسته‌بندی باشند
    const categoryIds = selectedCategories.map((cat) => cat.id);
    setFormData((prevState) => ({
      ...prevState,
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
    formPayload.append("price", parseFloat(formData.productPrice));
    formPayload.append("status", selectedStatus.id); // ارسال مقدار true/false
    formPayload.append("size", parseFloat(formData.productSize));
    formPayload.append("color", formData.productColor);
    formPayload.append("description", formData.productDescription);

    // اضافه کردن دسته‌بندی‌ها به FormData به صورت آرایه از ID
    formData.category.forEach((catId) => {
      formPayload.append("category[]", catId); // کلید باید مطابق با API باشد
    });

    // اضافه کردن تصاویر به FormData
    images.forEach((image) => {
      formPayload.append("product_image[]", image); // کلید باید مطابق با API باشد
    });

    try {
      await addProducts(formPayload);
      Swal.fire({
        icon: "success",
        title: "ثبت موفق!",
        text: "محصول با موفقیت ثبت شد.",
      });
      // ریست کردن فرم پس از موفقیت
      setFormData({
        productName: "",
        productColor: "",
        productSize: "",
        productPrice: "",
        productDescription: "",
        category: [],
      });
      setSelectedStatus(null);
      setImages([]);
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
      onCategorySelect={handleCategorySelect} // اضافه کردن هندلر دسته‌بندی
      onSubmit={handleSubmit}
      formData={formData}
      selectedStatus={selectedStatus}
      loadingCategories={loadingCategories}
    />
  );
};

export default ProductEntryPage;
