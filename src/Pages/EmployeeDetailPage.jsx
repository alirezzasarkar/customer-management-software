import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loading from "../Components/Common/Loading";
import { getEmployeeDetail, deleteEmployee } from "../Services/APIs/Employees";
import { convertToShamsi } from "../Utils/convertToShamsi";
import { convertJobtitleToPersian } from "../Utils/convertJobtitleToPersian";
import Swal from "sweetalert2";
import EmployeeDetail from "./../Components/Employees/EmployeeDetail";

const EmployeeDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const employee = await getEmployeeDetail(id);

        const convertedData = {
          ...employee,
          work_position: convertJobtitleToPersian(employee.work_position),
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

  const handleDeleteClick = () => {
    Swal.fire({
      title: "آیا مطمئن هستید؟",
      text: "با حذف کارمند دیگر قادر به بازگردانی آن نخواهید بود!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "بله، حذف شود!",
      cancelButtonText: "انصراف",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteEmployee(id)
          .then(() => {
            Swal.fire("حذف شد!", "کارمند با موفقیت حذف شد.", "success");
            navigate("/dashboard/employees/list");
          })
          .catch((error) => {
            console.error("Error deleting customer:", error);
            Swal.fire("خطا!", "در عملیات حذف کارمند مشکلی پیش آمد.", "error");
          });
      }
    });
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <EmployeeDetail data={data} onDelete={handleDeleteClick} />
      )}
    </>
  );
};

export default EmployeeDetailPage;
