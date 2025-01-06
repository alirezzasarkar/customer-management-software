import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { getCustomers } from "../Services/APIs/Customers";
import {
  getMarketingCampaignDetail,
  updateMarketingCampaign,
} from "../Services/APIs/Marketing";
import CampaignEdit from "../Components/Marketing/CampaignEdit";
import Loading from "./../Components/Common/Loading";

const CampaignEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [customers, setCustomers] = useState([]);
  const [formData, setFormData] = useState({
    campaignName: "",
    followUpDate: "",
    endDate: "",
    message: "",
    customers: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [customersData, campaignData] = await Promise.all([
          getCustomers(),
          getMarketingCampaignDetail(id),
        ]);

        const formattedCustomers = customersData.map((customer) => ({
          id: customer.id,
          name: customer.full_name,
        }));

        setCustomers(formattedCustomers);

        if (campaignData) {
          setFormData({
            campaignName: campaignData.campaign_name || "",
            followUpDate: campaignData.start_date
              ? new Date(campaignData.start_date).toISOString().split("T")[0]
              : "",
            endDate: campaignData.end_date
              ? new Date(campaignData.end_date).toISOString().split("T")[0]
              : "",
            message: campaignData.message || "",
            customers: campaignData.target_audiences || [],
          });
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

  const handleCustomerSelect = (selectedItems) => {
    setFormData((prevState) => ({
      ...prevState,
      customers: Array.isArray(selectedItems)
        ? selectedItems.map((item) => item.id)
        : [],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formattedStartDate = formData.followUpDate
      ? new Date(formData.followUpDate).toISOString()
      : "";
    const formattedEndDate = formData.endDate
      ? new Date(formData.endDate).toISOString()
      : "";

    const payload = {
      campaign_name: formData.campaignName,
      start_date: formattedStartDate,
      end_date: formattedEndDate,
      message: formData.message,
      target_audiences: formData.customers,
    };

    try {
      await updateMarketingCampaign(id, payload);
      Swal.fire({
        icon: "success",
        title: "ویرایش موفق!",
        text: "کمپین با موفقیت به‌روزرسانی شد.",
      }).then(() => {
        navigate("/dashboard/marketing/list");
      });
    } catch (error) {
      console.error("Error updating campaign:", error);
      Swal.fire({
        icon: "error",
        title: "خطا",
        text: "مشکلی در به‌روزرسانی کمپین وجود داشت.",
      });
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <CampaignEdit
      customers={customers}
      formData={formData}
      onInputChange={handleInputChange}
      onCustomerSelect={handleCustomerSelect}
      onSubmit={handleSubmit}
    />
  );
};

export default CampaignEditPage;
