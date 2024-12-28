import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductListEdit from "../Components/Products/ProductListEdit";
import { getProductDetail } from "../Services/APIs/Products";

const ProductListEditPage = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const product = await getProductDetail(id);
        setProductData(product);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProductDetails();
  }, [id]);

  return (
    <div>
      <ProductListEdit productData={productData} />
    </div>
  );
};

export default ProductListEditPage;
