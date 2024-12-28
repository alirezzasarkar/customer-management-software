import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import CampaignEntry from "../Components/Marketing/CampaignEntry";
import { getCustomers } from "../Services/APIs/Customers";
import { addMarketingCampaigns } from "../Services/APIs/Marketing";

const CampaignEntryPage = () => {
  const [customers, setCustomers] = useState([]);
  const [formData, setFormData] = useState({
    campaignName: "",
    followUpDate: "",
    endDate: "",
    message: "",
  });
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const customersData = await getCustomers();
        const formattedCustomers = customersData.map((customer) => ({
          id: customer.id,
          name: customer.full_name,
        }));
        setCustomers(formattedCustomers);
      } catch (error) {
        console.error("Error fetching customers:", error);
      }
    };

    fetchCustomers();
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if dates are valid before attempting to use them
    const formattedDate = formData.followUpDate
      ? new Date(formData.followUpDate).toISOString()
      : ""; // Ensure the date is valid
    const formattedEndDate = formData.endDate
      ? new Date(formData.endDate).toISOString()
      : ""; // Ensure the date is valid

    const payload = {
      campaign_name: formData.campaignName,
      start_date: formattedDate,
      end_date: formattedEndDate,
      message: formData.message,
      customer_id: selectedCustomer?.id || "",
    };

    try {
      await addMarketingCampaigns(payload);
      Swal.fire({
        icon: "success",
        title: "ثبت موفق!",
        text: "کمپین با موفقیت ثبت شد.",
      });
    } catch (error) {
      console.error("Error submitting campaign:", error);
      Swal.fire({
        icon: "error",
        title: "خطا",
        text: "مشکلی در ثبت کمپین وجود داشت.",
      });
    }
  };

  return (
    <CampaignEntry
      customers={customers || []}
      formData={formData}
      onInputChange={handleInputChange}
      onCustomerSelect={handleCustomerSelect}
      onSubmit={handleSubmit}
    />
  );
};

export default CampaignEntryPage;
