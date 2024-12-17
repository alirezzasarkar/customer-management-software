import React, { useEffect, useState } from "react";
import ContractList from "../Components/Contract/ContractList";
import Loading from "../Components/Common/Loading";
import { getFactors } from "../Services/APIs/Contract";
import { convertToShamsi } from "../Utils/convertToShamsi";

const columns = [
  { id: "name", label: "نام مشتری" },
  { id: "date", label: "تاریخ قرارداد" },
  { id: "amount", label: "مبلغ فاکتور" },
  { id: "description", label: "توضیحات" },
];

const ContractListPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchFactors = async () => {
      setLoading(true);
      try {
        const factors = await getFactors();

        const processedData = factors.map((item) => ({
          id: item.id,
          name: item.customer,
          date: convertToShamsi(item.contract_date),
          amount: item.price,
          description: item.description,
        }));

        setData(processedData);
      } catch (error) {
        console.error("Failed to fetch factors:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFactors();
  }, []);

  return (
    <div>
      {loading ? <Loading /> : <ContractList data={data} columns={columns} />}
    </div>
  );
};

export default ContractListPage;
