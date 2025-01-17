// DashboardDropDown.js
import { useEffect, useRef, useState } from "react";

export default function DashboardDropDown({
  label_text,
  items = [],
  onSelect,
  selectedItem, // دریافت آبجکت انتخاب‌شده از والد
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const [searchTerm, setSearchTerm] = useState("");

  // جستجو با کنترل حالت خالی بودن نام آیتم
  const filteredItems = items.filter((item) => {
    const itemName = item.name ? item.name.toLowerCase() : "";
    return itemName.includes(searchTerm.toLowerCase());
  });

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleSelect = (item) => {
    onSelect?.(item);
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
        {/* اگر انتخابی وجود داشته باشد نمایش بده وگرنه متن پیش‌فرض */}
        {selectedItem ? selectedItem.name : "انتخاب کنید"}
        <img
          src="/images/arrow-down.svg"
          aria-hidden="true"
          className={`h-5 w-5 text-gray-400 transform transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {isOpen && (
        <ul className="absolute top-full left-0 z-10 mt-1 w-64 rounded-lg bg-white shadow-lg p-2 text-center text-sm space-y-3 text-[#0E295B] dropdown-scroll">
          {/* بخش جستجو */}
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
              className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4"
            />
          </div>

          {/* نمایش لیست فیلترشده یا پیام «موردی یافت نشد» */}
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer p-2 ${
                  selectedItem && selectedItem.id === item.id
                    ? "bg-gray-200"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => handleSelect(item)}
              >
                {item.name}
              </li>
            ))
          ) : (
            <li className="p-2 text-gray-500">موردی یافت نشد</li>
          )}
        </ul>
      )}
    </div>
  );
}
