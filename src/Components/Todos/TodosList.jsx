import { useEffect, useState } from "react";
import Search from "../Common/Search";
import Sorting from "../Common/Sorting";
import Table from "../Common/Table";
import Title from "../Common/Title";

const TodosList = ({ data, columns }) => {
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const handleSearch = (searchTerm) => {
    if (!searchTerm.trim()) {
      setFilteredData(data); // اگر جستجو خالی باشد، داده‌ها را دوباره بارگذاری کنیم
      return;
    }

    // استفاده از String برای تبدیل داده‌ها به رشته
    const result = data.filter(
      (item) =>
        String(item.full_name)
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        String(item.email).toLowerCase().includes(searchTerm.toLowerCase()) ||
        String(item.phone_number).includes(searchTerm)
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
      <Title title="لیست وظایف " />
      <div className="bg-gray-100 p-5 sm:mx-6 rounded-md">
        <div className="flex justify-between px-2 py-3">
          <div className="hidden md:block">
            <Sorting onSort={handleSort} columns={columns} />
          </div>
          <Search onSearch={handleSearch} />
        </div>
        <Table columns={columns} data={filteredData} pageName="todos" />
      </div>
    </>
  );
};

export default TodosList;
