import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ContractDetail from "../Components/Contract/ContractDetail";
import Loading from "../Components/Common/Loading";
import { getFactorById } from "../Services/APIs/Contract";
import { getProducts } from "./../Services/APIs/Products";
import { getCustomerDetail } from "../Services/APIs/Customers";
import { convertToShamsi } from "../Utils/convertToShamsi";

const ContractDetailPage = () => {
  const { id } = useParams();
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
      } finally {
        setLoading(false);
      }
    };

    fetchFactorProductsAndCustomer();
  }, [id]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <ContractDetail data={data} products={productList} />
      )}
    </>
  );
};

export default ContractDetailPage;
