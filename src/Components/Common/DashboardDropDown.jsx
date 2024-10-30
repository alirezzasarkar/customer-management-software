import { useState, useRef, useEffect } from "react";

export default function DashboardDropDown({ label_text }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

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

  return (
    <div ref={dropdownRef} className="relative flex flex-col w-[30%]">
      <label className="text-[#153D8A] px-2" htmlFor="dropdown">
        {label_text}
      </label>
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
        <ul className="absolute top-1/2 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none">
          <div className="py-1"></div>
          <li>ss</li>
          <li>ss</li>
          <li>ss</li>
        </ul>
      )}
    </div>
  );
}
