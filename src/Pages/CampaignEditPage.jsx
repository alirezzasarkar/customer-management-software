import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  getMarketingCampaignDetail,
  updateMarketingCampaign,
} from "./../Services/APIs/Marketing";
import CampaignEdit from "../Components/Marketing/CampaignEdit";
import Loading from "./../Components/Common/Loading";

const CampaignEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [targetRanks] = useState([
    { id: "RE", name: "قرمز" },
    { id: "GR", name: "طوسی" },
    { id: "GO", name: "طلایی" },
    { id: "SS", name: "سوپر ویژه" },
  ]);

  const [selectedTargetRanks, setSelectedTargetRanks] = useState([]);

  const [formData, setFormData] = useState({
    campaignName: "",
    followUpDate: "",
    endDate: "",
    message: "",
    target_rank: [],
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [campaignData] = await Promise.all([
          getMarketingCampaignDetail(id),
        ]);

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
            target_rank: campaignData.target_audiences
              ? campaignData.target_audiences.map((rank) => rank.id)
              : [],
          });

          const ranksSelected = campaignData.target_audiences
            ? campaignData.target_audiences.map((rank) => ({
                id: rank.id,
                name: targetRanks.find((r) => r.id === rank.id)?.name || "",
              }))
            : [];

          setSelectedTargetRanks(ranksSelected);
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
  }, [id, targetRanks]);

  const handleInputChange = (field, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleTargetRankSelect = (selectedItems) => {
    const ranksIds = selectedItems.map((item) => item.id);
    setFormData((prevState) => ({
      ...prevState,
      target_rank: ranksIds,
    }));
    setSelectedTargetRanks(selectedItems);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.target_rank.length === 0) {
      Swal.fire({
        icon: "warning",
        title: "رنک هدف انتخاب نشده",
        text: "لطفاً حداقل یک رنک هدف را انتخاب کنید.",
      });
      return;
    }

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
      target_rank: formData.target_rank,
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
      targetRanks={targetRanks}
      formData={formData}
      onInputChange={handleInputChange}
      onTargetRankSelect={handleTargetRankSelect}
      onSubmit={handleSubmit}
      selectedTargetRanks={selectedTargetRanks}
    />
  );
};

export default CampaignEditPage;
