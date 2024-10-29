import React, { useState, useEffect } from "react";
import Table from "../Common/Table";
import Search from "../Common/Search";
import Sorting from "../Common/Sorting";
import Title from "../Common/Title";

const ProductsList = ({ data, columns }) => {
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const handleSearch = (searchTerm) => {
    const result = data.filter(
      (item) =>
        item.product_name.includes(searchTerm) ||
        item.price.includes(searchTerm) ||
        item.category.includes(searchTerm)
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
    <>
      <Title title="لیست محصولات" />
      <div className="bg-gray-100 p-5 mx-6 rounded-md">
        <div className="flex justify-between px-2 py-3">
          <Sorting onSort={handleSort} columns={columns} />
          <Search onSearch={handleSearch} />
        </div>
        <Table columns={columns} data={filteredData} />
      </div>
    </>
  );
};

export default ProductsList;
