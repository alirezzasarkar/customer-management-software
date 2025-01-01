import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CampaignDetail from "../Components/Marketing/CampaignDetail";
import Loading from "../Components/Common/Loading";
import {
  getMarketingCampaignDetail,
  deleteMarketingCampaign,
} from "../Services/APIs/Marketing";
import { getCustomers } from "../Services/APIs/Customers";
import { convertToShamsi } from "../Utils/convertToShamsi";
import Swal from "sweetalert2";

const CampaignDetailPage = () => {
  const { id } = useParams(); // دریافت id از URL
  const navigate = useNavigate(); // برای هدایت پس از حذف
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [campaignDetail, customers] = await Promise.all([
          getMarketingCampaignDetail(id),
          getCustomers(),
        ]);

        const audienceMap = customers.reduce((acc, customer) => {
          acc[customer.id] = customer.full_name;
          return acc;
        }, {});

        const targetAudiences =
          Array.isArray(campaignDetail.target_audiences) &&
          campaignDetail.target_audiences.length > 0
            ? campaignDetail.target_audiences.map(
                (audienceId) => audienceMap[audienceId] || "نامشخص"
              )
            : [];

        const convertedData = {
          ...campaignDetail,
          start_date: convertToShamsi(campaignDetail.start_date),
          end_date: convertToShamsi(campaignDetail.end_date),
          target_audiences: targetAudiences,
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

  const handleDeleteCampaign = async () => {
    const result = await Swal.fire({
      title: "آیا مطمئن هستید؟",
      text: "این عملیات غیرقابل بازگشت خواهد بود!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "بله، حذف کن!",
      cancelButtonText: "لغو",
    });

    if (result.isConfirmed) {
      try {
        await deleteMarketingCampaign(id);
        Swal.fire("حذف شد!", "کمپین با موفقیت حذف شد.", "success");
        navigate("/dashboard/marketing/list"); // هدایت به صفحه لیست کمپین‌ها
      } catch (error) {
        console.error("Error deleting campaign:", error);
        Swal.fire("خطا!", "در حذف کمپین مشکلی پیش آمد.", "error");
      }
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <CampaignDetail data={data} onDelete={handleDeleteCampaign} />
      )}
    </>
  );
};

export default CampaignDetailPage;
