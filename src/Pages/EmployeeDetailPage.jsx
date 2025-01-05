import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EmployeeDetail from "../Components/Employees/EmployeeDetail";
import Loading from "../Components/Common/Loading";
import { getEmployeeDetail } from "../Services/APIs/Employees";
import { convertToShamsi } from "../Utils/convertToShamsi";
import { convertJobtitleToPersian } from "../Utils/convertJobtitleToPersian"; // وارد کردن تابع کمکی

const EmployeeDetailPage = () => {
  const { id } = useParams(); // گرفتن id از URL
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const employee = await getEmployeeDetail(id);

        const convertedData = {
          ...employee,
          work_position: convertJobtitleToPersian(employee.work_position), // تبدیل عنوان شغلی به فارسی
          date_of_assignment: convertToShamsi(employee.date_of_assignment),
          created_at: convertToShamsi(employee.created_at),
        };

        setData(convertedData);
      } catch (error) {
        console.error("Error fetching employee detail:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return <>{loading ? <Loading /> : <EmployeeDetail data={data} />}</>;
};

export default EmployeeDetailPage;
