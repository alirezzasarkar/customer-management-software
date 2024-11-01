import React from "react";
import { BiDotsHorizontalRounded, BiDotsVerticalRounded } from "react-icons/bi";

const Table = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto bg-white rounded-lg">
      <table className="min-w-full text-center">
        <thead className="bg-gray-100 border-b">
          <tr>
            {columns.map((column) => (
              <th
                key={column.id}
                className="py-4 text-sm font-semibold text-blue-800"
              >
                {column.label}
              </th>
            ))}
            <th className="px-6 py-4 font-semibold text-blue-800">جزئیات</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={row.id}
              className={`${
                rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"
              } border-b hover:bg-gray-100`}
            >
              {columns.map((column) => (
                <td key={column.id} className="px-6 py-4 text-sm text-gray-700">
                  {row[column.id]}
                </td>
              ))}
              <td className="px-6 py-4 text-center">
                <button className="text-xl text-green-600 hover:text-green-800">
                  <BiDotsHorizontalRounded />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
