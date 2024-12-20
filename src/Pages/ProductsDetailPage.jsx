import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "../Components/Products/ProductsDetail";
import Loading from "../Components/Common/Loading";
import { getProductDetail } from "../Services/APIs/Products";
import { convertStatusToPersian } from "../Utils/convertStatusToPersian";

const ProductsDetailPage = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

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
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetail();
  }, [id]);

  return <>{loading ? <Loading /> : <ProductDetail data={data} />}</>;
};

export default ProductsDetailPage;
