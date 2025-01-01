// CustomerDetailPage.js
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // برای ریدایرکت
import Swal from "sweetalert2"; // برای نمایش پیام تأیید یا خطا

import CustomerDetail from "../Components/Customers/CustomerDetail";
import Loading from "../Components/Common/Loading";
import { getCustomerDetail, deleteCustomer } from "../Services/APIs/Customers";
import { getFactors } from "../Services/APIs/Contract";
import { convertToShamsi } from "../Utils/convertToShamsi";

const CustomerDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // برای هدایت بعد از حذف
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

  // تابع حذف مشتری
  const handleDeleteCustomer = () => {
    Swal.fire({
      title: "آیا مطمئن هستید؟",
      text: "با حذف مشتری دیگر قادر به بازگردانی آن نخواهید بود!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "بله، حذف شود!",
      cancelButtonText: "انصراف",
    }).then((result) => {
      if (result.isConfirmed) {
        // اگر کاربر تأیید کرد
        deleteCustomer(id)
          .then(() => {
            Swal.fire("حذف شد!", "مشتری با موفقیت حذف شد.", "success");
            // هدایت به صفحه لیست مشتریان یا هر صفحه دلخواه
            navigate("/dashboard/customers/list");
          })
          .catch((error) => {
            console.error("Error deleting customer:", error);
            Swal.fire("خطا!", "در عملیات حذف مشتری مشکلی پیش آمد.", "error");
          });
      }
    });
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <CustomerDetail
          customerData={customerData}
          factors={factors}
          onDelete={handleDeleteCustomer} // مهم: ارسال تابع حذف به فرزند
        />
      )}
    </>
  );
};

export default CustomerDetailPage;
