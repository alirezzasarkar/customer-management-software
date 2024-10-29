import React, { useState } from "react";
import CampaignList from "../Components/Marketing/CampaignList";

const initialData = [
  {
    id: 1,
    campaignName: "کمپین پاییزه",
    campaignStatus: "فعال",
    startDate: "۱۳۸۱/۰۵/۲۲",
    endDate: "۱۳۸۱/۰۶/۲۲",
  },
  {
    id: 2,
    campaignName: "کمپین تابستانه",
    campaignStatus: "غیرفعال",
    startDate: "۱۳۸۲/۰۳/۱۹",
    endDate: "۱۳۸۲/۰۴/۱۹",
  },
  {
    id: 3,
    campaignName: "کمپین زمستانه",
    campaignStatus: "فعال",
    startDate: "۱۳۸۳/۰۸/۰۲",
    endDate: "۱۳۸۳/۰۹/۰۲",
  },
  {
    id: 4,
    campaignName: "کمپین نوروزی",
    campaignStatus: "غیرفعال",
    startDate: "۱۳۸۴/۰۱/۰۹",
    endDate: "۱۳۸۴/۰۲/۰۹",
  },
  {
    id: 5,
    campaignName: "کمپین ویژه",
    campaignStatus: "فعال",
    startDate: "۱۳۸۲/۱۰/۰۷",
    endDate: "۱۳۸۲/۱۱/۰۷",
  },
  {
    id: 6,
    campaignName: "کمپین تخفیف",
    campaignStatus: "غیرفعال",
    startDate: "۱۳۸۱/۱۲/۱۵",
    endDate: "۱۳۸۲/۰۱/۱۵",
  },
  {
    id: 7,
    campaignName: "کمپین بهاره",
    campaignStatus: "فعال",
    startDate: "۱۳۸۳/۰۶/۲۵",
    endDate: "۱۳۸۳/۰۷/۲۵",
  },
  {
    id: 8,
    campaignName: "کمپین ویژه تابستان",
    campaignStatus: "فعال",
    startDate: "۱۳۸۴/۰۲/۱۷",
    endDate: "۱۳۸۴/۰۳/۱۷",
  },
];

const columns = [
  { id: "campaignName", label: "نام کمپین" },
  { id: "campaignStatus", label: "وضعیت کمپین" },
  { id: "startDate", label: "تاریخ شروع" },
  { id: "endDate", label: "تاریخ پایان" },
];

const CampaignListPage = () => {
  const [data, setData] = useState(initialData);
  return <CampaignList data={data} columns={columns} />;
};

export default CampaignListPage;
