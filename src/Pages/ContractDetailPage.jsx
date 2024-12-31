import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ContractDetail from "../Components/Contract/ContractDetail";
import Loading from "../Components/Common/Loading";
import { getFactorById, deleteFactor } from "../Services/APIs/Contract"; // اضافه کردن deleteFactor
import { getProducts } from "../Services/APIs/Products";
import { getCustomerDetail } from "../Services/APIs/Customers";
import { convertToShamsi } from "../Utils/convertToShamsi";
import Swal from "sweetalert2";

const ContractDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFactorProductsAndCustomer = async () => {
      try {
        const factor = await getFactorById(id);

        const [products, customer] = await Promise.all([
          getProducts(),
          getCustomerDetail(factor.costumer),
        ]);

        const relatedProducts = factor.products.map((productItem) => {
          const productDetail = products.find(
            (product) => product.id === productItem.product_id
          );
          return {
            ...productDetail,
            quantity: productItem.quantity,
          };
        });

        const convertedFactor = {
          ...factor,
          customer_name: customer.full_name,
          contract_date: convertToShamsi(factor.contract_date),
          price: factor.price + " تومان",
        };

        setData(convertedFactor);
        setProductList(relatedProducts);
      } catch (error) {
        console.error("Error fetching factor, products, and customer:", error);
        Swal.fire({
          icon: "error",
          title: "خطا",
          text: "در بارگذاری جزئیات فاکتور مشکلی رخ داد.",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchFactorProductsAndCustomer();
  }, [id]);

  const handleDeleteFactor = () => {
    Swal.fire({
      title: "آیا مطمئن هستید؟",
      text: "شما نمی‌توانید این عملیات را بازگردانی کنید!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "بله، حذف شود!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(`Deleting factor with id: ${id}`);
        deleteFactor(id)
          .then(() => {
            Swal.fire("حذف شد!", "فاکتور با موفقیت حذف شد.", "success");
            window.location.replace("/dashboard/invoice/list");
          })
          .catch((error) => {
            console.error("Error deleting factor:", error);
            Swal.fire("خطا!", "در حذف فاکتور مشکلی پیش آمد.", "error");
          });
      }
    });
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <ContractDetail
          data={data}
          products={productList}
          onDelete={handleDeleteFactor}
        />
      )}
    </>
  );
};

export default ContractDetailPage;
