import { useEffect, useState } from "react";
import Loading from "../Components/Common/Loading";
import EmployeeList from "../Components/Employees/EmployeeList";
import { getEmployees } from "../Services/APIs/Employees";
import { convertJobtitleToPersian } from "../Utils/convertJobtitleToPersian";

const columns = [
  { id: "fullName", label: "نام و نام خانوادگی" },
  { id: "phoneNumber", label: "شماره تماس" },
  { id: "jobTitle", label: "سمت شغلی" },
];

const EmployeeListPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEmployees = async () => {
      setLoading(true);
      try {
        const employees = await getEmployees();

        const processedData = employees.map((employee) => ({
          id: employee.id,
          fullName: employee.full_name,
          phoneNumber: employee.phone_number,
          jobTitle: convertJobtitleToPersian(employee.work_position),
        }));

        setData(processedData);
      } catch (error) {
        console.error("Failed to fetch employees:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div>
      {loading ? <Loading /> : <EmployeeList data={data} columns={columns} />}
    </div>
  );
};

export default EmployeeListPage;
