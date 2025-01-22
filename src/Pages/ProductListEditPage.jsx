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
  const [productData, setProductData] = useState(null);
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
  const [productImage, setProductImage] = useState(null);
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
        setProductData(product);

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
        // اگر در سرور آدرس تصویر یا فایل ذخیره شده باشد، مقدار مربوطه ست می‌شود
        setProductImage(product.product_image || null);
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
    setProductImage(file);
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
    if (productImage) {
      formPayload.append("product_image", productImage);
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
        productImage={productImage}
      />
    </div>
  );
};

export default ProductListEditPage;
