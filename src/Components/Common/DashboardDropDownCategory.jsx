// DashboardDropDownCategory.jsx
import { useEffect, useRef, useState } from "react";

export default function DashboardDropDownCategory({
  label_text,
  items = [],
  onSelect,
  selectedItems = [],
  multiple = false, // پراپ جدید برای چند انتخابی
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const filteredItems = items.filter((item) =>
    item.category_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (item) => {
    if (multiple) {
      if (selectedItems.some((selected) => selected.id === item.id)) {
        // حذف کردن از لیست انتخاب شده
        onSelect(selectedItems.filter((selected) => selected.id !== item.id));
      } else {
        // اضافه کردن به لیست انتخاب شده
        onSelect([...selectedItems, item]);
      }
    } else {
      onSelect(item);
      setIsOpen(false);
    }
  };

  const renderSelected = () => {
    if (multiple) {
      return selectedItems.length > 0
        ? selectedItems.map((item) => item.category_name).join(", ")
        : "انتخاب کنید";
    } else {
      return selectedItems ? selectedItems.category_name : "انتخاب کنید";
    }
  };

  return (
    <div ref={dropdownRef} className="relative flex flex-col sm:w-[30%]">
      <label className="text-[#153D8A] px-2" htmlFor="dropdown">
        {label_text}
      </label>
      <button
        type="button"
        onClick={toggleDropdown}
        className="mt-2 inline-flex w-full justify-between items-center gap-x-1.5 rounded-lg bg-white h-10 px-2 text-sm text-gray-400"
        id="dropdown"
      >
        {renderSelected()}
        <img
          src="/images/arrow-down.svg"
          aria-hidden="true"
          className={`h-5 w-5 transform transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {isOpen && (
        <ul className="absolute top-full left-0 z-10 mt-1 w-64 origin-top-right rounded-lg bg-white ring-opacity-5 transition focus:outline-none p-2 text-center text-sm space-y-3 text-[#0E295B]">
          <div className="relative mb-2">
            <input
              type="search"
              placeholder="جستجو"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="placeholder:text-[#0E295B] placeholder:text-xs placeholder:font-bold w-full px-3 py-2 border-2 border-[#153D8A] rounded-lg focus:outline-none"
            />
            <img
              src="/images/Search-icon.svg"
              alt="Search Icon"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 "
            />
          </div>
          {filteredItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer p-2 flex items-center ${
                multiple
                  ? selectedItems.some((selected) => selected.id === item.id)
                    ? "bg-blue-100"
                    : "hover:bg-gray-100"
                  : ""
              }`}
              onClick={() => handleSelect(item)}
            >
              {multiple && (
                <input
                  type="checkbox"
                  checked={selectedItems.some(
                    (selected) => selected.id === item.id
                  )}
                  readOnly
                  className="ml-2"
                />
              )}
              {item.category_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
