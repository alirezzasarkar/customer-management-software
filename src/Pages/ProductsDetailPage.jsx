import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loading from "../Components/Common/Loading";
import ProductDetail from "../Components/Products/ProductsDetail";
import {
  getProductDetail,
  DeleteProduct,
  getCategory,
} from "../Services/APIs/Products";
import { convertStatusToPersian } from "../Utils/convertStatusToPersian";
import Swal from "sweetalert2";

const ProductsDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const product = await getProductDetail(id);
        const categories = await getCategory();

        // در صورتی که مسیر تصویر به صورت نسبی برگردد، باید دامنه را به ابتدای آن اضافه کنیم
        // اگر سرور مقدار product_image را به شکل /media/... برمی‌گرداند
        const baseUrl = "https://jalilvand-crm.liara.run";
        let fullImageUrl = product.product_image || "";
        if (fullImageUrl && fullImageUrl.startsWith("/")) {
          fullImageUrl = baseUrl + fullImageUrl;
        }

        let categoryNames = [];
        if (Array.isArray(product.category) && product.category.length > 0) {
          categoryNames = product.category.map((catId) => {
            const foundCat = categories.find((c) => c.id === catId);
            return foundCat ? foundCat.category_name : "بدون دسته‌بندی";
          });
        }

        const categoryString = categoryNames.length
          ? categoryNames.join(", ")
          : "بدون دسته‌بندی";

        const convertedData = {
          ...product,
          product_image: fullImageUrl,
          status: convertStatusToPersian(product.status),
          price: product.price + " ریال",
          category: categoryString,
        };

        setData(convertedData);
      } catch (error) {
        console.error("Error fetching product details:", error);
        Swal.fire({
          icon: "error",
          title: "خطا",
          text: "مشکلی در دریافت اطلاعات محصول وجود داشت.",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetail();
  }, [id]);

  const handleDelete = async () => {
    Swal.fire({
      title: "آیا مطمئن هستید؟",
      text: "این عملیات قابل بازگشت نیست!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "بله، حذف کن!",
      cancelButtonText: "لغو",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await DeleteProduct(id);
          Swal.fire("حذف شد!", "محصول با موفقیت حذف شد.", "success");
          navigate("/dashboard/products/list");
        } catch (error) {
          console.error("Error deleting product:", error);
          Swal.fire({
            icon: "error",
            title: "خطا",
            text: "مشکلی در حذف محصول وجود داشت.",
          });
        }
      }
    });
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <ProductDetail data={data} onDelete={handleDelete} />
      )}
    </>
  );
};

export default ProductsDetailPage;
