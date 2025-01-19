import { useEffect, useState } from "react";
import Search from "../Common/Search";
import Sorting from "../Common/Sorting";
import Table from "../Common/Table";
import Title from "../Common/Title";

const SalesOpportunitiesList = ({ data, columns }) => {
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const handleSearch = (searchTerm) => {
    const lowercasedTerm = searchTerm.toLowerCase();
    const result = data.filter(
      (item) =>
        String(item.fullName).toLowerCase().includes(lowercasedTerm) ||
        String(item.opportunityPriority)
          .toLowerCase()
          .includes(lowercasedTerm) ||
        String(item.totalAmount).includes(lowercasedTerm)
    );
    setFilteredData(result);
  };

  const handleSort = (column) => {
    let sortedData = [];
    if (column === "totalAmount") {
      sortedData = [...filteredData].sort(
        (a, b) => parseFloat(a[column]) - parseFloat(b[column])
      ); // مقایسه به درستی با عدد
    } else {
      sortedData = [...filteredData].sort(
        (a, b) => String(a[column]).localeCompare(String(b[column])) // اطمینان از مقایسه صحیح رشته‌ها
      );
    }
    setFilteredData(sortedData);
  };

  return (
    <div>
      <Title title="لیست فرصت‌های فروش" />
      <div className="bg-gray-100 p-5 sm:mx-6 rounded-md">
        <div className="flex justify-between px-2 py-3">
          <div className="hidden md:block">
            <Sorting onSort={handleSort} columns={columns} />
          </div>
          <Search onSearch={handleSearch} />
        </div>
        <Table
          columns={columns}
          data={filteredData}
          pageName="sales-opportunities"
        />
      </div>
    </div>
  );
};

export default SalesOpportunitiesList;
