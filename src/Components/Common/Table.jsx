import React from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { Link } from "react-router-dom";

const Table = ({ columns, data, pageName }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden">
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full text-center">
          <thead className="bg-gray-100 border-b">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.id}
                  className="py-4 text-sm md:text-base font-semibold text-blue-800"
                >
                  {column.label}
                </th>
              ))}
              <th className="px-6 py-4 font-semibold text-sm md:text-base text-blue-800">
                جزئیات
              </th>
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
                  <td
                    key={column.id}
                    className="px-6 py-4 text-xs md:text-sm text-gray-700"
                  >
                    {row[column.id]}
                  </td>
                ))}
                <td className="px-6 py-4 text-center">
                  <Link
                    to={`/dashboard/${pageName}/detail/${row.id}`}
                    className="text-lg md:text-xl text-green-600 hover:text-green-800"
                  >
                    <BiDotsHorizontalRounded />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {data.map((row) => (
          <div
            key={row.id}
            className="bg-gray-50 p-4 rounded-lg shadow-sm border"
          >
            {columns.map((column) => (
              <div key={column.id} className="flex justify-between py-2">
                <span className="font-semibold text-xs md:text-sm text-gray-600">
                  {column.label}:
                </span>
                <span className="text-xs md:text-sm text-gray-700">
                  {row[column.id]}
                </span>
              </div>
            ))}
            <div className="flex justify-between items-center pt-2 border-t mt-2">
              <span className="font-semibold text-xs md:text-sm text-gray-600">
                جزئیات:
              </span>
              <Link
                to={`/dashboard/${pageName}/detail/${row.id}`}
                className="text-lg md:text-xl text-green-600 hover:text-green-800"
              >
                <BiDotsHorizontalRounded />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
