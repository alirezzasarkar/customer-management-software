import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { getCustomers } from "../Services/APIs/Customers";
import { getProducts } from "../Services/APIs/Products";
import SalesOpportunitiesEntry from "./../Components/SalesOpportunities/SalesOpportunitiesEntry";
import { addSalesOpportunity } from "./../Services/APIs/SalesOpportunities";

const SalesOpportunitiesEntryPage = () => {
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

  const handleProductSelect = (product) => {
    setSelectedProducts((prevSelected) => {
      if (prevSelected.some((item) => item.id === product.id)) {
        return prevSelected.filter((item) => item.id !== product.id);
      } else {
        return [...prevSelected, product];
      }
    });
  };

  const handlePrioritySelect = (priority) => {
    setSelectedPriority(priority);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formattedDate = new Date(formData.followUpDate)
      .toISOString()
      .split("T")[0];

    const payload = {
      follow_up_date: formattedDate,
      estimated_amount: parseFloat(formData.estimatedAmount),
      opportunity_priority: selectedPriority?.id || "",
      selected_products: selectedProducts.map((product) => product.id), // ارسال همه محصولات انتخاب‌شده
      description: formData.description,
      profile: selectedCustomer?.id || "",
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
    />
  );
};

export default SalesOpportunitiesEntryPage;
