import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ContractDetail from "../Components/Contract/ContractDetail";
import Loading from "../Components/Common/Loading";
import { getFactorById, deleteFactor } from "../Services/APIs/Contract";
import { getProducts } from "./../Services/APIs/Products";
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

        if (!factor.costumer) {
          throw new Error("Customer ID is not defined in the factor response");
        }

        const [products, customer] = await Promise.all([
          getProducts(),
          getCustomerDetail(factor.costumer),
        ]);

        const relatedProducts = factor.items.map((item) => {
          const productDetail = products.find(
            (product) => product.id === item.product
          );
          return {
            ...productDetail,
            product_name: item.product_name,
            quantity: item.quantity,
          };
        });

        const convertedFactor = {
          ...factor,
          customer_name: customer.full_name,
          contract_date: convertToShamsi(factor.contract_date),
          price: factor.price.toLocaleString("fa-IR") + " ریال",
          file_url: factor.files
            ? `https://jalilvand-crm.liara.run/${factor.files}`
            : null,
        };

        setData(convertedFactor);
        setProductList(relatedProducts);
      } catch (error) {
        console.error("Error fetching factor, products, and customer:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFactorProductsAndCustomer();
  }, [id]);

  const handleDelete = async () => {
    Swal.fire({
      title: "آیا از حذف این فاکتور مطمئن هستید؟",
      text: "این عملیات غیرقابل بازگشت است!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "بله، حذف شود!",
      cancelButtonText: "لغو",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteFactor(id);
          Swal.fire("حذف شد!", "فاکتور با موفقیت حذف شد.", "success");
          navigate("/dashboard/invoice/list");
        } catch (error) {
          console.error("Error deleting factor:", error);
          Swal.fire(
            "خطا",
            "مشکلی در حذف فاکتور رخ داده است. لطفاً دوباره تلاش کنید.",
            "error"
          );
        }
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
          onDelete={handleDelete}
        />
      )}
    </>
  );
};

export default ContractDetailPage;
