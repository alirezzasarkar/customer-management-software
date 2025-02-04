import { useState } from "react";
import Loading from "../Components/Common/Loading";
import ReportsList from "../Components/Reports/ReportsList";

const columns = [
  { id: "full_name", label: "نام و نام خانوادگی" },
  { id: "send_date", label: "تاریخ ارسال" },
  { id: "report_detail", label: "جزییات گزارش کار" },
];

const ReportsListPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <div>
      {loading ? <Loading /> : <ReportsList data={data} columns={columns} />}
    </div>
  );
};

export default ReportsListPage;
