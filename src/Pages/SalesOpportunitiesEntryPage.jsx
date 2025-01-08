import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { getCustomers } from "../Services/APIs/Customers";
import { getProducts } from "../Services/APIs/Products";
import SalesOpportunitiesEntry from "./../Components/SalesOpportunities/SalesOpportunitiesEntry";
import { addSalesOpportunity } from "./../Services/APIs/SalesOpportunities";

const SalesOpportunitiesEntryPage = () => {
  const [buyer_type] = useState([
    { id: "KH", name: "خرده" },
    { id: "OM", name: "عمده" },
  ]);
  const [products, setProducts] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedPriority, setSelectedPriority] = useState(null);
  const [formData, setFormData] = useState({
    followUpDate: "",
    estimatedAmount: "",
    description: "",
  });
  const [selectedbuyer_type, setSelectedbuyer_type] = useState(null);

  const priorityOptions = [
    { id: "low_priority", name: "کم" },
    { id: "mid_priority", name: "متوسط" },
    { id: "high_priority", name: "زیاد" },
  ];

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

  const handleCustomerSelect = (customer) => {
    setSelectedCustomer(customer);
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

  const handlePrioritySelect = (priority) => {
    setSelectedPriority(priority);
  };

  const handlebuyer_typeSelect = (buyer_type) => {
    setSelectedbuyer_type(buyer_type);
    handleInputChange("buyer_type", buyer_type.id);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formattedDate = formData.followUpDate
      ? new Date(formData.followUpDate).toISOString().split("T")[0]
      : "";

    const payload = {
      buyer_type: formData.buyer_type,
      follow_up_date: formattedDate,
      estimated_amount: parseFloat(formData.estimatedAmount) || 0,
      opportunity_priority: selectedPriority?.id || "",
      description: formData.description || "",
      profile: selectedCustomer?.id || "",
      new_items: selectedProducts.map((product) => ({
        product: product.id,
        quantity: product.quantity || 1,
      })),
    };

    try {
      await addSalesOpportunity(payload);
      Swal.fire({
        icon: "success",
        title: "ثبت موفق!",
        text: "فرصت فروش با موفقیت ثبت شد.",
      });
    } catch (error) {
      console.error("Error submitting sales opportunity:", error);
      Swal.fire({
        icon: "error",
        title: "خطا",
        text: "مشکلی در ثبت فرصت فروش وجود داشت.",
      });
    }
  };

  return (
    <SalesOpportunitiesEntry
      customers={customers || []}
      products={products || []}
      priorities={priorityOptions}
      onCustomerSelect={handleCustomerSelect}
      onProductSelect={handleProductSelect}
      onPrioritySelect={handlePrioritySelect}
      onInputChange={handleInputChange}
      onSubmit={handleSubmit}
      formData={formData}
      selectedProducts={selectedProducts}
      selectedCustomer={selectedCustomer}
      selectedPriority={selectedPriority}
      buyer_type={buyer_type}
      onbuyer_typeSelect={handlebuyer_typeSelect}
      selectedbuyer_type={selectedbuyer_type}
    />
  );
};

export default SalesOpportunitiesEntryPage;
