import React, { useEffect, useState } from "react";
import CampaignList from "../Components/Marketing/CampaignList";
import Loading from "../Components/Common/Loading";
import { getMarketingCampaigns } from "../Services/APIs/Marketing";
import { convertToShamsi } from "../Utils/convertToShamsi";

const columns = [
  { id: "campaign_name", label: "نام کمپین" },
  { id: "start_date", label: "تاریخ شروع" },
  { id: "end_date", label: "تاریخ پایان" },
];

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
