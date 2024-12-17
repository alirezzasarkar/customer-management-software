import React, { useEffect, useState } from "react";
import ProductsList from "../Components/Products/ProductsList";
import Loading from "../Components/Common/Loading";
import { getProducts } from "../Services/APIs/Products";
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

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const products = await getProducts();

        const convertedData = products.map((item) => ({
          id: item.id,
          product_name: item.product_name,
          price: item.price,
          category: item.category,
          status: convertStatusToPersian(item.status),
        }));

        setData(convertedData);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      {loading ? <Loading /> : <ProductsList data={data} columns={columns} />}
    </div>
  );
};

export default ProductsListPage;
