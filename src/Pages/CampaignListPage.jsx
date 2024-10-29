import React, { useState } from "react";
import CampaignList from "../Components/Marketing/CampaignList";

const initialData = [
  {
    id: 1,
    campaign_name: "کمپین پاییزه",
    campaignStatus: "فعال",
    start_date: "۱۳۸۱/۰۵/۲۲",
    end_date: "۱۳۸۱/۰۶/۲۲",
  },
  {
    id: 2,
    campaign_name: "کمپین تابستانه",
    campaignStatus: "غیرفعال",
    start_date: "۱۳۸۲/۰۳/۱۹",
    end_date: "۱۳۸۲/۰۴/۱۹",
  },
  {
    id: 3,
    campaign_name: "کمپین زمستانه",
    campaignStatus: "فعال",
    start_date: "۱۳۸۳/۰۸/۰۲",
    end_date: "۱۳۸۳/۰۹/۰۲",
  },
  {
    id: 4,
    campaign_name: "کمپین نوروزی",
    campaignStatus: "غیرفعال",
    start_date: "۱۳۸۴/۰۱/۰۹",
    end_date: "۱۳۸۴/۰۲/۰۹",
  },
  {
    id: 5,
    campaign_name: "کمپین ویژه",
    campaignStatus: "فعال",
    start_date: "۱۳۸۲/۱۰/۰۷",
    end_date: "۱۳۸۲/۱۱/۰۷",
  },
  {
    id: 6,
    campaign_name: "کمپین تخفیف",
    campaignStatus: "غیرفعال",
    start_date: "۱۳۸۱/۱۲/۱۵",
    end_date: "۱۳۸۲/۰۱/۱۵",
  },
  {
    id: 7,
    campaign_name: "کمپین بهاره",
    campaignStatus: "فعال",
    start_date: "۱۳۸۳/۰۶/۲۵",
    end_date: "۱۳۸۳/۰۷/۲۵",
  },
  {
    id: 8,
    campaign_name: "کمپین ویژه تابستان",
    campaignStatus: "فعال",
    start_date: "۱۳۸۴/۰۲/۱۷",
    end_date: "۱۳۸۴/۰۳/۱۷",
  },
];

const columns = [
  { id: "campaign_name", label: "نام کمپین" },
  { id: "campaignStatus", label: "وضعیت کمپین" },
  { id: "start_date", label: "تاریخ شروع" },
  { id: "end_date", label: "تاریخ پایان" },
];

const CampaignListPage = () => {
  const [data, setData] = useState(initialData);
  return <CampaignList data={data} columns={columns} />;
};

export default CampaignListPage;
