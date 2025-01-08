import React, { useEffect, useState } from "react";
import CustomerList from "../Components/Customers/CustomerList";
import Loading from "../Components/Common/Loading";
import { getCustomers } from "../Services/APIs/Customers";
import { convertToShamsi } from "../Utils/convertToShamsi";

const columns = [
  { id: "full_name", label: "نام و نام خانوادگی مشتری" },
  { id: "address", label: "آدرس" },
  { id: "phone_number", label: "شماره تماس" },
  { id: "buyer_rank", label: "نوع مشتری" },
];

const CustomerListPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getBuyerRankInPersian = (rank) => {
    switch (rank) {
      case "BR":
        return "برنزی";
      case "SI":
        return "نقره‌ای";
      case "GO":
        return "طلایی";
      default:
        return "مشخص نشده";
    }
  };

  useEffect(() => {
    const fetchCustomers = async () => {
      setLoading(true);
      try {
        const customers = await getCustomers();

        const processedData = customers.map((customer) => ({
          id: customer.id,
          full_name: customer.full_name,
          address: customer.address,
          phone_number: customer.phone_number,
          buyer_rank: getBuyerRankInPersian(customer.buyer_rank),
          date_of_birth: convertToShamsi(customer.date_of_birth),
        }));

        setData(processedData);
      } catch (error) {
        console.error("Failed to fetch customers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  return (
    <div>
      {loading ? <Loading /> : <CustomerList data={data} columns={columns} />}
    </div>
  );
};

export default CustomerListPage;
