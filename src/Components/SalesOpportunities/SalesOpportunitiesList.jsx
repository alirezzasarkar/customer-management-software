import React, { useEffect, useState } from "react";
import Search from "../Common/Search";
import Sorting from "../Common/Sorting";
import Table from "../Common/Table";
import Title from "../Common/Title";

const SalesOpportunitiesList = ({ data, columns }) => {
  const [filteredData, setFilteredData] = useState(data);
  console.log(filteredData);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const handleSearch = (searchTerm) => {
    const result = data.filter(
      (item) =>
        item.fullName.includes(searchTerm) ||
        item.opportunityPriority.includes(searchTerm) ||
        item.totalAmount.includes(searchTerm)
    );
    setFilteredData(result);
  };

  const handleSort = (column) => {
    const sortedData = [...filteredData].sort((a, b) =>
      a[column].localeCompare(b[column])
    );
    setFilteredData(sortedData);
  };

  return (
    <div className="">
      <Title title="لیست فرصت های فروش" />
      <div className="bg-gray-100 p-5 sm:mx-6 rounded-md">
        <div className="flex justify-between px-2 py-3">
          <div className="hidden md:block">
            <Sorting onSort={handleSort} columns={columns} />
          </div>
          <Search onSearch={handleSearch} />
        </div>
        <Table columns={columns} data={filteredData} />
      </div>
    </div>
  );
};

export default SalesOpportunitiesList;
