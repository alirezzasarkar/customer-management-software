import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SalesOpportunitiesDetail from "../Components/SalesOpportunities/SalesOpportunitiesDetail";
import Loading from "../Components/Common/Loading";
import { getSalesOpportunityDetail } from "../Services/APIs/SalesOpportunities";
import { convertToShamsi } from "../Utils/convertToShamsi";
import { getProducts } from "./../Services/APIs/Products";
import { getCustomers } from "./../Services/APIs/Customers";
import { convertPriorityToPersian } from "../Utils/convertPriorityToPersian";

const SalesOpportunitiesDetailPage = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

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

        const productList = opportunity.selected_products.map(
          (productId) => productMap[productId] || "نامشخص"
        );

        const convertedData = {
          ...opportunity,
          follow_up_date: convertToShamsi(opportunity.follow_up_date),
          opportunity_priority: convertPriorityToPersian(
            opportunity.opportunity_priority
          ),
          products: productList,
          customer_name: customerMap[opportunity.profile] || "نامشخص",
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
    <>{loading ? <Loading /> : <SalesOpportunitiesDetail data={data} />}</>
  );
};

export default SalesOpportunitiesDetailPage;
