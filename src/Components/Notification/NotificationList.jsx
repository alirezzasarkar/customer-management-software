import React, { useState, useEffect } from "react";
import Table from "../Common/Table";
import Search from "../Common/Search";
import Sorting from "../Common/Sorting";
import Title from "../Common/Title";

const NotificationList = ({ data, columns }) => {
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const handleSearch = (searchTerm) => {
    if (!searchTerm.trim()) {
      setFilteredData(data); // اگر جستجو خالی باشد، داده‌ها را دوباره بارگذاری کنیم
      return;
    }

    const result = data.filter(
      (item) =>
        String(item.recipients)
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        String(item.sendDate)
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        String(item.sendTime).includes(searchTerm) // تبدیل به رشته و حساس به حروف نباشد
    );
    setFilteredData(result);
  };

  const handleSort = (column) => {
    const sortedData = [...filteredData].sort(
      (a, b) => String(a[column]).localeCompare(String(b[column])) // اطمینان از مقایسه صحیح رشته‌ها
    );
    setFilteredData(sortedData);
  };

  return (
    <>
      <Title title="لیست پیام‌ها" />
      <div className="bg-gray-100 p-5 mx-6 rounded-md">
        <div className="flex justify-between px-2 py-3">
          <div className="hidden md:block">
            <Sorting onSort={handleSort} columns={columns} />
          </div>
          <Search onSearch={handleSearch} />
        </div>
        <Table columns={columns} data={filteredData} pageName="notification" />
      </div>
    </>
  );
};

export default NotificationList;
