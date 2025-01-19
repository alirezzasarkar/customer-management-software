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
    const lowercasedTerm = searchTerm.toLowerCase();
    const result = data.filter(
      (item) =>
        String(item.product_name).toLowerCase().includes(lowercasedTerm) ||
        String(item.price).toString().includes(lowercasedTerm) ||
        String(item.category).toLowerCase().includes(lowercasedTerm)
    );
    setFilteredData(result);
  };

  const handleSort = (column) => {
    let sortedData = [];
    if (column === "price") {
      sortedData = [...filteredData].sort(
        (a, b) => parseFloat(a.price) - parseFloat(b.price)
      ); // مقایسه به‌درستی قیمت‌ها
    } else {
      sortedData = [...filteredData].sort(
        (a, b) => String(a[column]).localeCompare(String(b[column])) // اطمینان از مقایسه صحیح رشته‌ها
      );
    }
    setFilteredData(sortedData);
  };

  return (
    <>
      <Title title="لیست محصولات" />
      <div className="bg-gray-100 p-5 mx-6 rounded-md">
        <div className="flex justify-between px-2 py-3">
          <div className="hidden md:block">
            <Sorting onSort={handleSort} columns={columns} />
          </div>
          <Search onSearch={handleSearch} />
        </div>
        <Table columns={columns} data={filteredData} pageName="products" />
      </div>
    </>
  );
};

export default ProductsList;
