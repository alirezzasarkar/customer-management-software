// ProductsListPage.jsx
import { useEffect, useState } from "react";
import Loading from "../Components/Common/Loading";
import ProductsList from "../Components/Products/ProductsList";
import { getProducts, getCategory } from "../Services/APIs/Products"; // اطمینان از وارد کردن getCategory
import { convertStatusToPersian } from "../Utils/convertStatusToPersian";

const columns = [
  { id: "product_name", label: "نام محصول" },
  { id: "price", label: "قیمت محصول" },
  { id: "category", label: "دسته بندی" },
  { id: "status", label: "وضعیت" },
];

const ProductsListPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]); // وضعیت برای دسته‌بندی‌ها

  useEffect(() => {
    const fetchCategoriesAndProducts = async () => {
      setLoading(true);
      try {
        // دریافت دسته‌بندی‌ها و محصولات به صورت همزمان
        const [categoriesData, productsData] = await Promise.all([
          getCategory(),
          getProducts(),
        ]);

        // ایجاد نقشه‌ای از شناسه دسته‌بندی به نام آن
        const categoryMap = categoriesData.reduce((acc, category) => {
          acc[category.id] = category.category_name;
          return acc;
        }, {});

        // تبدیل شناسه‌های دسته‌بندی به نام‌ها
        const convertedData = productsData.map((item) => ({
          id: item.id,
          product_name: item.product_name,
          price: item.price + " ریال",
          // اگر دسته‌بندی‌ها به صورت آرایه‌ای از شناسه‌ها باشند
          category: Array.isArray(item.category)
            ? item.category
                .map((catId) => categoryMap[catId] || "نامشخص")
                .join(", ")
            : categoryMap[item.category] || "نامشخص",
          status: convertStatusToPersian(item.status),
        }));

        setData(convertedData);
      } catch (error) {
        console.error("Failed to fetch products or categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoriesAndProducts();
  }, []);

  return (
    <div>
      {loading ? <Loading /> : <ProductsList data={data} columns={columns} />}
    </div>
  );
};

export default ProductsListPage;
