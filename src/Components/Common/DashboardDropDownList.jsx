import { useEffect, useRef, useState } from "react";

export default function DashboardDropDownList({
  label_text,
  items,
  onSelect,
  selectedItems = [],
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
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

  const handleItemClick = (item) => {
    onSelect(item);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative flex flex-col sm:w-[30%]">
      <label className="text-[#153D8A] px-2">{label_text}</label>
      <button
        type="button"
        onClick={toggleDropdown}
        className="mt-2 inline-flex w-full justify-end items-center gap-x-1.5 rounded-lg bg-white h-10 px-2 text-sm font-semibold text-gray-900"
        id="dropdown"
      >
        <img
          src="/src/Assets/Icons/arrow-down.svg"
          aria-hidden="true"
          className={`h-5 w-5 text-gray-400 transform transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {isOpen && (
        <ul className="absolute top-1/2 left-0 z-10 mt-3 w-56 origin-top-right rounded-lg bg-white ring-opacity-5 transition focus:outline-none p-2 text-center text-sm space-y-3 text-[#0E295B]">
          <div className="relative mb-2">
            <input
              type="search"
              placeholder="جستجو"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="placeholder:text-[#0E295B] placeholder:text-xs placeholder:font-bold w-full px-3 py-2 border-2 border-[#153D8A] rounded-lg focus:outline-none"
            />
            <img
              src="/src/Assets/Icons/Search-icon.svg"
              alt="Search Icon"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4"
            />
          </div>
          {filteredItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer border-b p-2 ${
                selectedItems.some((selected) => selected.id === item.id)
                  ? "bg-blue-100 "
                  : ""
              }`}
              onClick={() => handleItemClick(item)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
