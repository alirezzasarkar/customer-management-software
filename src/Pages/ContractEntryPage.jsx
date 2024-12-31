// ContractEntryPage.jsx
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import ContractEntry from "../Components/Contract/ContractEntry";
import { addFactors } from "../Services/APIs/Contract";
import { getProducts } from "../Services/APIs/Products";
import { getCustomers } from "../Services/APIs/Customers";

const ContractEntryPage = () => {
  const [formData, setFormData] = useState({
    price: "",
    invoiceDate: "",
    description: "",
  });
  const [products, setProducts] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsData, customersData] = await Promise.all([
          getProducts(),
          getCustomers(),
        ]);

        const formattedProducts = productsData.map((product) => ({
          id: product.id,
          name: product.product_name,
        }));

        const formattedCustomers = customersData.map((customer) => ({
          id: customer.id,
          name: customer.full_name,
        }));

        setProducts(formattedProducts);
        setCustomers(formattedCustomers);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (field, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleProductSelect = (product) => {
    if (product.quantity > 0) {
      setSelectedProducts((prevSelected) => {
        const exists = prevSelected.find((item) => item.id === product.id);
        if (exists) {
          return prevSelected.map((item) =>
            item.id === product.id
              ? { ...item, quantity: product.quantity }
              : item
          );
        } else {
          return [...prevSelected, product];
        }
      });
    } else {
      setSelectedProducts((prevSelected) =>
        prevSelected.filter((item) => item.id !== product.id)
      );
    }
  };

  const handleCustomerSelect = (customer) => {
    setSelectedCustomer(customer);
    console.log("Selected Customer:", customer);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedCustomer) {
      Swal.fire({
        icon: "warning",
        title: "مشتری انتخاب نشده",
        text: "لطفاً یک مشتری را انتخاب کنید.",
      });
      return;
    }

    let formattedDate = formData.invoiceDate;
    if (formData.invoiceDate) {
      try {
        formattedDate = new Date(formData.invoiceDate)
          .toISOString()
          .split("T")[0];
      } catch (error) {
        console.error("Error formatting date:", error);
      }
    }

    const payload = {
      costumer: selectedCustomer?.id || 0,
      price: parseFloat(formData.price) || 0,
      invoice_date: formattedDate,
      description: formData.description,
      products: selectedProducts.map((product) => ({
        product_id: product.id,
        quantity: product.quantity || 1,
      })),
    };

    console.log("Payload to send:", payload);

    try {
      const response = await addFactors(payload);
      console.log("Factors Added:", response);
      Swal.fire({
        icon: "success",
        title: "ثبت موفق!",
        text: "فاکتور با موفقیت ثبت شد.",
      });
    } catch (error) {
      console.error("Error submitting factors:", error);
      Swal.fire({
        icon: "error",
        title: "خطا",
        text: "مشکلی در ثبت فاکتور وجود داشت.",
      });
    }
  };

  useEffect(() => {
    console.log("Selected Products:", selectedProducts);
  }, [selectedProducts]);

  return (
    <ContractEntry
      formData={formData}
      products={products}
      customers={customers}
      onInputChange={handleInputChange}
      onProductSelect={handleProductSelect}
      onCustomerSelect={handleCustomerSelect}
      selectedCustomer={selectedCustomer}
      selectedProducts={selectedProducts}
      onSubmit={handleSubmit}
    />
  );
};

export default ContractEntryPage;
