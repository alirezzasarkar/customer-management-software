import React, { useEffect, useState } from "react";
import SalesOpportunitiesList from "../Components/SalesOpportunities/SalesOpportunitiesList";
import Loading from "../Components/Common/Loading";
import { getSalesOpportunities } from "../Services/APIs/SalesOpportunities";
import { getCustomers } from "../Services/APIs/Customers";
import { convertToShamsi } from "../Utils/convertToShamsi";
import { convertPriorityToPersian } from "../Utils/convertPriorityToPersian";

const columns = [
  { id: "profile", label: "نام و نام خانوادگی" },
  { id: "follow_up_date", label: "تاریخ پیگیری" },
  { id: "opportunity_priority", label: "اولویت فرصت" },
  { id: "estimated_amount", label: "مبلغ تخمینی" },
  { id: "description", label: "توضیحات" },
];

const SalesOpportunitiesListPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [salesOpportunities, customers] = await Promise.all([
          getSalesOpportunities(),
          getCustomers(),
        ]);

        const customerMap = customers.reduce((acc, customer) => {
          acc[customer.id] = customer.full_name;
          return acc;
        }, {});

        const convertedData = salesOpportunities.map((item) => ({
          ...item,
          profile: customerMap[item.profile] || "نامشخص",
          follow_up_date: convertToShamsi(item.follow_up_date),
          opportunity_priority: convertPriorityToPersian(
            item.opportunity_priority
          ),
        }));

        setData(convertedData);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <SalesOpportunitiesList data={data} columns={columns} />
      )}
    </div>
  );
};

export default SalesOpportunitiesListPage;
