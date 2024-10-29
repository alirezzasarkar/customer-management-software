import React from "react";

const Sorting = ({ onSort, columns }) => {
  return (
    <div className="space-x-4 rtl:space-x-reverse mb-4">
      <span className="text-green-600 text-sm font-bold">مرتب سازی:</span>
      {columns.map((column) => (
        <button
          key={column.id}
          onClick={() => onSort(column.id)}
          className="text-sm font-medium text-blue-800 hover:text-blue-700 focus:outline-none"
        >
          {column.label}
        </button>
      ))}
    </div>
  );
};

export default Sorting;
