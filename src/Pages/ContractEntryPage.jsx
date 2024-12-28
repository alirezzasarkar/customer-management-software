import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import ContractEntry from "../Components/Contract/ContractEntry";
import { addFactors } from "../Services/APIs/Contract";
import { getProducts } from "../Services/APIs/Products";

const ContractEntryPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    price: "",
    invoiceDate: "",
    description: "",
  });
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProducts();
        const formattedProducts = productsData.map((product) => ({
          id: product.id,
          name: product.product_name,
        }));
        setProducts(formattedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleInputChange = (field, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleProductSelect = (product) => {
    setSelectedProducts((prevSelected) => {
      if (prevSelected.some((item) => item.id === product.id)) {
        return prevSelected.filter((item) => item.id !== product.id);
      } else {
        return [...prevSelected, product];
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formattedDate = formData.invoiceDate; // Default to the entered date
    if (formData.invoiceDate) {
      try {
        // Convert Persian date to Gregorian if necessary (optional)
        formattedDate = new Date(formData.invoiceDate)
          .toISOString()
          .split("T")[0];
      } catch (error) {
        console.error("Error formatting date:", error);
      }
    }
    const payload = {
      full_name: formData.fullName,
      price: parseFloat(formData.price),
      invoice_date: formattedDate,
      description: formData.description,
      products: selectedProducts.map((product) => ({
        id: product.id, // Convert each product to a dictionary with an `id` key
      })),
    };

    try {
      await addFactors(payload);
      Swal.fire({
        icon: "success",
        title: "ثبت موفق!",
        text: "قرارداد با موفقیت ثبت شد.",
      });
    } catch (error) {
      console.error("Error submitting contract data:", error);
      Swal.fire({
        icon: "error",
        title: "خطا",
        text: "مشکلی در ثبت قرارداد وجود داشت.",
      });
    }
  };

  return (
    <ContractEntry
      formData={formData}
      products={products}
      onInputChange={handleInputChange}
      onProductSelect={handleProductSelect}
      onSubmit={handleSubmit}
    />
  );
};

export default ContractEntryPage;
