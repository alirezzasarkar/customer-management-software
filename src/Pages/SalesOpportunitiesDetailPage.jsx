import { useEffect, useState } from "react";
import {
  deleteSalesOpportunity,
  getSalesOpportunityDetail,
} from "../Services/APIs/SalesOpportunities";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "./../Components/Common/Loading";
import SalesOpportunitiesDetail from "../Components/SalesOpportunities/SalesOpportunitiesDetail";
import { getProducts } from "../Services/APIs/Products";
import { getCustomers } from "../Services/APIs/Customers";
import { convertToShamsi } from "./../Utils/convertToShamsi";
import { convertPriorityToPersian } from "./../Utils/convertPriorityToPersian";

const SalesOpportunitiesDetailPage = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const handleDelete = async () => {
    const result = await Swal.fire({
      title: "آیا مطمئن هستید؟",
      text: "این عملیات قابل بازگشت نخواهد بود!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "بله، حذف کن!",
      cancelButtonText: "لغو",
    });

    if (result.isConfirmed) {
      try {
        await deleteSalesOpportunity(id);
        Swal.fire("حذف شد!", "فرصت فروش با موفقیت حذف شد.", "success");
        window.location.replace("/dashboard/sales-opportunities/list");
      } catch (error) {
        console.error("Error deleting sales opportunity:", error);
        Swal.fire(
          "خطا",
          "مشکلی در حذف فرصت فروش وجود داشت. دوباره تلاش کنید.",
          "error"
        );
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [opportunity, products, customers] = await Promise.all([
          getSalesOpportunityDetail(id),
          getProducts(),
          getCustomers(),
        ]);

        const customerMap = customers.reduce((acc, customer) => {
          acc[customer.id] = customer.full_name;
          return acc;
        }, {});

        const productMap = products.reduce((acc, product) => {
          acc[product.id] = product.product_name;
          return acc;
        }, {});

        const productList = opportunity.items
          ? opportunity.items.map((item) => ({
              name: productMap[item.product] || "نامشخص",
              quantity: item.quantity,
            }))
          : [];

        const convertedData = {
          ...opportunity,
          follow_up_date: convertToShamsi(opportunity.follow_up_date),
          opportunity_priority: convertPriorityToPersian(
            opportunity.opportunity_priority
          ),
          products: productList,
          customer_name: customerMap[opportunity.profile] || "نامشخص",
          estimated_amount:
            opportunity.estimated_amount.toLocaleString("fa-IR"),
        };

        setData(convertedData);
      } catch (error) {
        console.error("Failed to fetch details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <SalesOpportunitiesDetail data={data} onDelete={handleDelete} />
      )}
    </>
  );
};

export default SalesOpportunitiesDetailPage;
