import React, { useEffect, useState } from "react";
import CustomerList from "../Components/Customers/CustomerList";
import Loading from "../Components/Common/Loading";
import { getCustomers } from "../Services/APIs/Customers";
import { convertToShamsi } from "../Utils/convertToShamsi";

const columns = [
  { id: "full_name", label: "نام و نام خانوادگی" },
  { id: "national_id", label: "کدملی" },
  { id: "phone_number", label: "شماره تماس" },
  { id: "email", label: "ایمیل" },
];

const CustomerListPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCustomers = async () => {
      setLoading(true);
      try {
        const customers = await getCustomers();

        const processedData = customers.map((customer) => ({
          id: customer.id,
          full_name: customer.full_name,
          national_id: customer.national_id,
          phone_number: customer.phone_number,
          email: customer.email,
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
