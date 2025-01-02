import { useEffect, useState } from "react";
import Loading from "../Components/Common/Loading";
import Dashboard from "../Components/Dashboard/Dashboard";
import { getDashboardDetails } from "../Services/APIs/Dashboard";

const DashboardPage = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const response = await getDashboardDetails();
        setData(response);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching data", err);
      }
    };
    fetchedData();
  }, []);

  if (!data && !error)
    return (
      <div>
        <Loading />
      </div>
    );
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Dashboard
        customer_data={data.customer_data}
        sales_data={data.sales_data}
        sales_opportunity={data.sales_opportunity}
        customer_chart={data.customer_chart}
        marketing_status={data.marketing_status}
        sales_chart={data.sales_chart}
      />
    </>
  );
};

export default DashboardPage;
