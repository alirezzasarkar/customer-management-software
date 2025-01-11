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
  const [files, setFiles] = useState([]);
  const [uploadMessage, setUploadMessage] = useState("");

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

  const handleProductSelect = (product, quantity) => {
    setSelectedProducts((prevSelected) => {
      const existingProduct = prevSelected.find(
        (item) => item.id === product.id
      );
      if (existingProduct) {
        if (quantity === 0) {
          return prevSelected.filter((item) => item.id !== product.id);
        } else {
          return prevSelected.map((item) =>
            item.id === product.id ? { ...item, quantity } : item
          );
        }
      } else {
        return [...prevSelected, { ...product, quantity }];
      }
    });
  };

  const handleCustomerSelect = (customer) => {
    setSelectedCustomer(customer);
  };

  const handleFileChange = (selectedFiles) => {
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
    setUploadMessage("فایل با موفقیت انتخاب شد.");
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

    const formattedPrice = formData.price.replace(/,/g, "");

    try {
      const formattedProducts = selectedProducts
        .map((product) => `${product.id}:${product.quantity}`)
        .join(",");

      const payload = {
        costumer: selectedCustomer.id || 0,
        price: parseFloat(formattedPrice) || 0,
        description: formData.description || "",
        products: formattedProducts,
        files,
      };

      const response = await addFactors(payload);

      Swal.fire({
        icon: "success",
        title: "ثبت موفق!",
        text: "فاکتور با موفقیت ثبت شد.",
      });

      setFormData({ price: "", invoiceDate: "", description: "" });
      setSelectedProducts([]);
      setSelectedCustomer(null);
      setFiles([]);
      setUploadMessage("");
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
      files={files}
      uploadMessage={uploadMessage}
    />
  );
};

export default ContractEntryPage;
