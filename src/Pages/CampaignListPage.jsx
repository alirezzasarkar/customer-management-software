import React, { useEffect, useState } from "react";
import Loading from "../Components/Common/Loading";
import CampaignList from "../Components/Marketing/CampaignList";
import { getMarketingCampaigns } from "../Services/APIs/Marketing";
import { convertToShamsi } from "../Utils/convertToShamsi";

const columns = [
  { id: "campaign_name", label: "نام کمپین" },
  { id: "target_rank", label: "مخاطبین هدف" },
  { id: "start_date", label: "تاریخ شروع" },
  { id: "end_date", label: "تاریخ پایان" },
];

const targetRankMapping = {
  RE: "قرمز",
  GR: "طوسی",
  GO: "طلایی",
  SS: "سوپر ویژه",
};

const CampaignListPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCampaigns = async () => {
      setLoading(true);
      try {
        const campaigns = await getMarketingCampaigns();

        const convertedData = campaigns.map((item) => ({
          ...item,
          target_rank: Array.isArray(item.target_rank)
            ? item.target_rank
                .map((rank) => targetRankMapping[rank] || rank)
                .join(", ")
            : targetRankMapping[item.target_rank] || item.target_rank,
          start_date: convertToShamsi(item.start_date),
          end_date: convertToShamsi(item.end_date),
        }));

        setData(convertedData);
      } catch (error) {
        console.error("Failed to fetch campaigns:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, []);

  return (
    <div>
      {loading ? <Loading /> : <CampaignList data={data} columns={columns} />}
    </div>
  );
};

export default CampaignListPage;
