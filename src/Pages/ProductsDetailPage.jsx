import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loading from "../Components/Common/Loading";
import ProductDetail from "../Components/Products/ProductsDetail";
import { getProductDetail, DeleteProduct } from "../Services/APIs/Products";
import { convertStatusToPersian } from "../Utils/convertStatusToPersian";
import Swal from "sweetalert2";

const ProductsDetailPage = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const product = await getProductDetail(id);

        const convertedData = {
          ...product,
          status: convertStatusToPersian(product.status),
          price: product.price + " تومان",
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
          navigate("/dashboard/products/list"); // بازگشت به صفحه لیست محصولات
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
