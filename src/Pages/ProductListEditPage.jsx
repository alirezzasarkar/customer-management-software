// Pages/ProductListEditPage.jsx

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import ProductListEdit from "../Components/Products/ProductListEdit";
import {
  getProductDetail,
  getCategory,
  updateProduct,
} from "../Services/APIs/Products";

const ProductListEditPage = () => {
  const { id } = useParams();
  const [categories, setCategories] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [statuses] = useState([
    { id: true, name: "موجود" },
    { id: false, name: "ناموجود" },
  ]);
  const [selectedStatus, setSelectedStatus] = useState(null);

  const [formData, setFormData] = useState({
    productName: "",
    brand: "",
    productColor: "",
    productSize: "",
    productPrice: "",
    productDescription: "",
    category: [], // آرایه‌ای از شناسه دسته‌بندی‌ها
  });
  const [currentImage, setCurrentImage] = useState(null); // existing image URL
  const [newImage, setNewImage] = useState(null); // new image File
  const [loading, setLoading] = useState(false);

  // دریافت دسته‌بندی‌ها
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategory();
        setCategories(data);
      } catch (err) {
        console.error("Error fetching categories:", err);
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

  // دریافت اطلاعات محصول جهت ویرایش
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const product = await getProductDetail(id);

        setFormData({
          productName: product.product_name || "",
          brand: product.brand || "",
          productColor: product.color || "",
          productSize: product.size || "",
          productPrice: product.price || "",
          productDescription: product.description || "",
          category: product.category ? product.category.map((cat) => +cat) : [],
        });

        const statusFound = statuses.find((s) => s.id === product.status);
        setSelectedStatus(statusFound || null);

        // تنظیم URL تصویر
        if (product.product_image) {
          const isAbsoluteUrl = /^(?:[a-z]+:)?\/\//i.test(
            product.product_image
          );
          const baseUrl = "https://jalilvand-crm.liara.run"; // تغییر دهید به آدرس واقعی API خود
          const imageUrl = isAbsoluteUrl
            ? product.product_image
            : `${baseUrl}${product.product_image}`;
          console.log("Image URL:", imageUrl); // برای بررسی
          setCurrentImage(imageUrl);
        } else {
          setCurrentImage(null);
        }
      } catch (error) {
        console.error("Error fetching product data:", error);
        Swal.fire({
          icon: "error",
          title: "خطا",
          text: "در دریافت اطلاعات محصول مشکلی رخ داد.",
        });
      }
    };

    if (id) {
      fetchProductDetails();
    }
  }, [id, statuses]);

  // تابع تغییر ورودی‌ها
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // انتخاب وضعیت محصول
  const handleStatusSelect = (status) => {
    setSelectedStatus(status);
  };

  // آپلود تصویر محصول
  const handleImageUpload = (file) => {
    setNewImage(file);
  };

  // انتخاب دسته‌بندی‌ها
  const handleCategorySelect = (selectedCategories) => {
    const categoryIds = selectedCategories.map((cat) => Number(cat.id));
    setFormData((prev) => ({
      ...prev,
      category: categoryIds,
    }));
  };

  // تابع ارسال فرم جهت به‌روزرسانی محصول
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

    // استفاده از FormData جهت پشتیبانی از آپلود فایل (تصویر)
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

    // فقط در صورتی که تصویر جدید آپلود شده باشد، آن را به FormData اضافه کنید
    if (newImage instanceof File) {
      formPayload.append("product_image", newImage);
    }

    // برای دیباگ: بررسی مقادیر FormData
    for (let pair of formPayload.entries()) {
      console.log(`${pair[0]}:`, pair[1]);
    }

    setLoading(true);
    try {
      await updateProduct(id, formPayload);
      Swal.fire({
        icon: "success",
        title: "به‌روزرسانی موفق!",
        text: "محصول با موفقیت به‌روزرسانی شد.",
      });
    } catch (error) {
      console.error("Error updating product:", error);
      Swal.fire({
        icon: "error",
        title: "خطا",
        text: "مشکلی در به‌روزرسانی محصول رخ داده است. لطفاً دوباره تلاش کنید.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <ProductListEdit
        product_name={formData.productName}
        product_image={currentImage} // URL تصویر موجود
        categories={categories}
        statuses={statuses}
        selectedStatus={selectedStatus}
        onStatusSelect={handleStatusSelect}
        onInputChange={handleInputChange}
        onImageUpload={handleImageUpload}
        onCategorySelect={handleCategorySelect}
        onSubmit={handleSubmit}
        formData={formData}
        loading={loading}
        loadingCategories={loadingCategories}
        productImage={newImage} // فایل تصویر جدید
      />
    </div>
  );
};

export default ProductListEditPage;
