import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // افزودن useParams و useNavigate
import Swal from "sweetalert2";
import { getCustomers } from "../Services/APIs/Customers";
import { getProducts } from "../Services/APIs/Products";
import {
  getSalesOpportunityDetail,
  updateSalesOpportunity,
} from "./../Services/APIs/SalesOpportunities";
import SalesOpportunitiesEdit from "../Components/SalesOpportunities/SalesOpportunitiesEdit";
import Loading from "./../Components/Common/Loading";

const SalesOpportunitiesEditPage = () => {
  const { id } = useParams(); // دریافت شناسه از URL
  const navigate = useNavigate(); // برای هدایت بعد از موفقیت‌آمیز بودن به‌روزرسانی
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
  const [loading, setLoading] = useState(true); // برای مدیریت وضعیت بارگذاری

  const priorityOptions = [
    { id: "low_priority", name: "کم" },
    { id: "mid_priority", name: "متوسط" },
    { id: "high_priority", name: "زیاد" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsData, customersData, opportunityData] =
          await Promise.all([
            getProducts(),
            getCustomers(),
            getSalesOpportunityDetail(id), // واکشی جزئیات فرصت فروش
          ]);

        console.log("Fetched Opportunity Data:", opportunityData); // لاگ داده‌ها

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

        // تنظیم داده‌های فرم با داده‌های واکشی شده
        if (opportunityData) {
          setFormData({
            followUpDate: opportunityData.follow_up_date
              ? new Date(opportunityData.follow_up_date)
                  .toISOString()
                  .split("T")[0]
              : "",
            estimatedAmount: opportunityData.estimated_amount.toString(),
            description: opportunityData.description || "",
          });

          const customer = formattedCustomers.find(
            (c) => c.id === opportunityData.profile
          );
          setSelectedCustomer(customer || null);

          const priority = priorityOptions.find(
            (p) => p.id === opportunityData.opportunity_priority
          );
          setSelectedPriority(priority || null);

          // بررسی وجود new_items قبل از دسترسی به آن
          const productsSelected =
            opportunityData.new_items
              ?.map((item) => {
                const product = formattedProducts.find(
                  (p) => p.id === item.product
                );
                return product ? { ...product, quantity: item.quantity } : null;
              })
              .filter((item) => item !== null) || [];

          setSelectedProducts(productsSelected);
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        Swal.fire({
          icon: "error",
          title: "خطا",
          text: "مشکلی در واکشی داده‌ها وجود داشت.",
        });
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleInputChange = (field, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleCustomerSelect = (customer) => {
    setSelectedCustomer(customer);
  };

  // تابع مدیریت انتخاب محصول و تعداد آن
  const handleProductSelect = (product, quantity) => {
    setSelectedProducts((prevSelected) => {
      const existingProduct = prevSelected.find(
        (item) => item.id === product.id
      );
      if (existingProduct) {
        // اگر از قبل انتخاب شده بود
        if (quantity === 0) {
          // حذف
          return prevSelected.filter((item) => item.id !== product.id);
        } else {
          // به‌روزرسانی تعداد
          return prevSelected.map((item) =>
            item.id === product.id ? { ...item, quantity } : item
          );
        }
      } else {
        // افزودن محصول جدید
        return [...prevSelected, { ...product, quantity }];
      }
    });
  };

  const handlePrioritySelect = (priority) => {
    setSelectedPriority(priority);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formattedDate = formData.followUpDate
      ? new Date(formData.followUpDate).toISOString().split("T")[0]
      : "";

    const payload = {
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
      await updateSalesOpportunity(id, payload); // ارسال شناسه و payload
      Swal.fire({
        icon: "success",
        title: "ویرایش موفق!",
        text: "فرصت فروش با موفقیت به‌روزرسانی شد.",
      }).then(() => {
        navigate("/dashboard/sales-opportunities/list"); // هدایت به صفحه لیست پس از موفقیت
      });
    } catch (error) {
      console.error("Error submitting sales opportunity:", error);
      Swal.fire({
        icon: "error",
        title: "خطا",
        text: "مشکلی در به‌روزرسانی فرصت فروش وجود داشت.",
      });
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <SalesOpportunitiesEdit
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
    />
  );
};

export default SalesOpportunitiesEditPage;
