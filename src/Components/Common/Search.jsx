import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="items-center mb-4">
      <div className="relative flex items-center w-full max-w-xs">
        <span className="absolute left-2 text-gray-500">
          <BiSearch />
        </span>
        <input
          type="text"
          placeholder="جستجو"
          value={searchTerm}
          onChange={handleInputChange}
          className="w-full pl-4 p-2 px-2 text-sm border rounded-lg focus:ring-1 focus:ring-blue-400 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default Search;
