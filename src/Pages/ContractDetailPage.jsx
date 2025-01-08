import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CampaignDetail from "../Components/Marketing/CampaignDetail";
import Loading from "../Components/Common/Loading";
import {
  getMarketingCampaignDetail,
  deleteMarketingCampaign,
} from "../Services/APIs/Marketing";
import Swal from "sweetalert2";
import { convertToShamsi } from "../Utils/convertToShamsi";

const targetRankMapping = {
  BR: "برنزی",
  SI: "نقره‌ای",
  GO: "طلایی",
};

const CampaignDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCampaign = async () => {
      try {
        const campaign = await getMarketingCampaignDetail(id);

        const displayTargetRanks = Array.isArray(campaign.target_rank)
          ? campaign.target_rank
              .map((rank) => targetRankMapping[rank] || rank)
              .join(", ")
          : targetRankMapping[campaign.target_rank] || campaign.target_rank;

        const convertedCampaign = {
          ...campaign,
          target_rank: displayTargetRanks,
          start_date: convertToShamsi(campaign.start_date),
          end_date: convertToShamsi(campaign.end_date),
        };

        setData(convertedCampaign);
      } catch (error) {
        console.error("Error fetching campaign details:", error);
        Swal.fire({
          icon: "error",
          title: "خطا",
          text: "در بارگذاری جزئیات کمپین مشکلی رخ داد.",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchCampaign();
  }, [id]);

  const handleDeleteCampaign = () => {
    Swal.fire({
      title: "آیا مطمئن هستید؟",
      text: "شما نمی‌توانید این عملیات را بازگردانی کنید!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "بله، حذف شود!",
      cancelButtonText: "انصراف",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMarketingCampaign(id)
          .then(() => {
            Swal.fire("حذف شد!", "کمپین با موفقیت حذف شد.", "success");
            navigate("/dashboard/marketing/list");
          })
          .catch((error) => {
            console.error("Error deleting campaign:", error);
            Swal.fire("خطا!", "در حذف کمپین مشکلی پیش آمد.", "error");
          });
      }
    });
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
