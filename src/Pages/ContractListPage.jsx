import React, { useEffect, useState } from "react";
import ContractList from "../Components/Contract/ContractList";
import Loading from "../Components/Common/Loading";
import { getFactors } from "../Services/APIs/Contract";
import { getCustomers } from "../Services/APIs/Customers";
import { convertToShamsi } from "../Utils/convertToShamsi";

const columns = [
  { id: "name", label: "نام و نام خانوادگی مشتری" },
  { id: "date", label: "تاریخ ثبت فاکتور" },
  { id: "amount", label: "مبلغ فاکتور" },
  { id: "description", label: "توضیحات" },
];

const ContractListPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [factors, customers] = await Promise.all([
          getFactors(),
          getCustomers(),
        ]);

        const customerMap = customers.reduce((acc, customer) => {
          acc[customer.id] = customer.full_name;
          return acc;
        }, {});

        const processedData = factors.map((item) => ({
          id: item.id,
          name: customerMap[item.costumer] || "نامشخص",
          date: convertToShamsi(item.contract_date),
          amount: item.price + " ریال",
          description: item.description,
        }));

        setData(processedData);
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
      {loading ? <Loading /> : <ContractList data={data} columns={columns} />}
    </div>
  );
};

export default ContractListPage;
