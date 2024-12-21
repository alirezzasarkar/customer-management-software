import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CustomerDetail from "../Components/Customers/CustomerDetail";
import Loading from "../Components/Common/Loading";
import { getCustomerDetail } from "../Services/APIs/Customers";
import { getFactors } from "../Services/APIs/Contract";
import { convertToShamsi } from "../Utils/convertToShamsi";

const CustomerDetailPage = () => {
  const { id } = useParams();
  const [customerData, setCustomerData] = useState(null);
  const [factors, setFactors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [customer, allFactors] = await Promise.all([
          getCustomerDetail(id),
          getFactors(),
        ]);

        const customerFactors = allFactors.filter(
          (factor) => factor.costumer === parseInt(id, 10)
        );

        const convertedFactors = customerFactors.map((factor) => ({
          ...factor,
          contract_date: convertToShamsi(factor.contract_date),
        }));

        setCustomerData(customer);
        setFactors(convertedFactors);
      } catch (error) {
        console.error("Error fetching customer details or factors:", error);
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
        <CustomerDetail customerData={customerData} factors={factors} />
      )}
    </>
  );
};

export default CustomerDetailPage;
