// src/Pages/ContractEntryPage.js

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
  const [files, setFiles] = useState([]); // فایل‌ها به صورت آرایه از فایل‌ها

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
        Swal.fire({
          icon: "error",
          title: "خطا",
          text: "مشکلی در واکشی داده‌ها وجود داشت.",
        });
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

  const handleProductSelect = (product, quantity = 1) => {
    setSelectedProducts((prevSelected) => {
      const exists = prevSelected.find((item) => item.id === product.id);
      if (exists) {
        return prevSelected.map((item) =>
          item.id === product.id ? { ...item, quantity } : item
        );
      } else {
        return [...prevSelected, { ...product, quantity }];
      }
    });
  };

  const handleCustomerSelect = (customer) => {
    setSelectedCustomer(customer);
  };

  const handleFileChange = (selectedFiles) => {
    // فیلتر فایل‌ها برای پذیرش فقط PDF و Word
    const filteredFiles = Array.from(selectedFiles).filter((file) =>
      [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ].includes(file.type)
    );

    if (filteredFiles.length !== selectedFiles.length) {
      Swal.fire({
        icon: "warning",
        title: "فرمت نامعتبر",
        text: "لطفاً فقط فایل‌های PDF و Word را آپلود کنید.",
      });
    }

    setFiles(filteredFiles);
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

    const formattedDate = formData.invoiceDate
      ? new Date(formData.invoiceDate).toISOString().split("T")[0]
      : "";

    // ایجاد FormData
    const payload = new FormData();
    payload.append("costumer", selectedCustomer.id || 0);
    payload.append("price", parseFloat(formData.price) || 0);
    payload.append("invoice_date", formattedDate);
    payload.append("description", formData.description || "");

    // اضافه کردن محصولات
    selectedProducts.forEach((product, index) => {
      payload.append(`products[${index}][product_id]`, product.id);
      payload.append(`products[${index}][quantity]`, product.quantity || 1);
    });

    // اضافه کردن فایل‌ها
    files.forEach((file, index) => {
      payload.append(`files`, file);
    });

    try {
      const response = await addFactors(payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      Swal.fire({
        icon: "success",
        title: "ثبت موفق!",
        text: "فاکتور با موفقیت ثبت شد.",
      });

      setFormData({ price: "", invoiceDate: "", description: "" });
      setSelectedProducts([]);
      setSelectedCustomer(null);
      setFiles([]);
    } catch (error) {
      console.error("Error submitting factors:", error);
      Swal.fire({
        icon: "error",
        title: "خطا",
        text: "مشکلی در ثبت فاکتور وجود داشت.",
      });
    }
  };

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
      onFileChange={handleFileChange}
      onSubmit={handleSubmit}
      files={files} // ارسال فایل‌ها به کامپوننت فرزند
    />
  );
};

export default ContractEntryPage;
