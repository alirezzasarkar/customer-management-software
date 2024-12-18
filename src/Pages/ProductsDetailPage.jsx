import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "../Components/Products/ProductsDetail";
import Loading from "../Components/Common/Loading";
import { getProductDetail } from "../Services/APIs/Products";
import { convertStatusToPersian } from "../Utils/convertStatusToPersian";

const ProductsDetailPage = () => {
  const { product_id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const product = await getProductDetail(product_id);

        const convertedData = {
          ...product,
          status: convertStatusToPersian(product.status),
          price: new Intl.NumberFormat().format(product.price) + " تومان",
        };

        setData(convertedData);
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetail();
  }, [product_id]);

  return <>{loading ? <Loading /> : <ProductDetail data={data} />}</>;
};

export default ProductsDetailPage;
