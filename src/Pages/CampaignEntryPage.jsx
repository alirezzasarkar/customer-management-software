import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import CampaignEntry from "../Components/Marketing/CampaignEntry";
import { addMarketingCampaigns } from "../Services/APIs/Marketing";

const CampaignEntryPage = () => {
  const [targetRanks] = useState([
    { id: "BR", name: "برنزی" },
    { id: "SI", name: "نقره‌ای" },
    { id: "GO", name: "طلایی" },
  ]);

  const [selectedTargetRanks, setSelectedTargetRanks] = useState([]);

  const [formData, setFormData] = useState({
    campaignName: "",
    followUpDate: "",
    endDate: "",
    message: "",
    target_rank: [],
  });

  const handleInputChange = (field, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleTargetRankSelect = (ranks) => {
    setSelectedTargetRanks(ranks);
    const ranksIds = ranks.map((rank) => rank.id);
    handleInputChange("target_rank", ranksIds);
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
      target_rank: formData.target_rank,
    };

    try {
      await addMarketingCampaigns(payload);
      Swal.fire({
        icon: "success",
        title: "ثبت موفق!",
        text: "کمپین با موفقیت ثبت شد.",
      });
      setFormData({
        campaignName: "",
        followUpDate: "",
        endDate: "",
        message: "",
        target_rank: [],
      });
      setSelectedTargetRanks([]);
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
      formData={formData}
      onInputChange={handleInputChange}
      onSubmit={handleSubmit}
      targetRanks={targetRanks}
      onTargetRankSelect={handleTargetRankSelect}
      selectedTargetRanks={selectedTargetRanks}
    />
  );
};

export default CampaignEntryPage;
