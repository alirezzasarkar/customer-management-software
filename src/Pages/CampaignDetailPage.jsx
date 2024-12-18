import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CampaignDetail from "../Components/Marketing/CampaignDetail";
import Loading from "../Components/Common/Loading";
import { getMarketingCampaignDetail } from "../Services/APIs/Marketing";
import { getCustomers } from "../Services/APIs/Customers";
import { convertToShamsi } from "../Utils/convertToShamsi";

const CampaignDetailPage = () => {
  const { id } = useParams(); // دریافت id از URL
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [campaignDetail, targetAudiences] = await Promise.all([
          getMarketingCampaignDetail(id),
          getCustomers(),
        ]);

        const audienceMap = targetAudiences.reduce((acc, audience) => {
          acc[audience.id] = audience.full_name;
          return acc;
        }, {});

        const convertedData = {
          ...campaignDetail,
          start_date: convertToShamsi(campaignDetail.start_date),
          end_date: convertToShamsi(campaignDetail.end_date),
          target_audiences: campaignDetail.target_audiences
            .map((audienceId) => audienceMap[audienceId])
            .join(", "),
        };

        setData(convertedData);
      } catch (error) {
        console.error("Failed to fetch campaign details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return <>{loading ? <Loading /> : <CampaignDetail data={data} />}</>;
};

export default CampaignDetailPage;
