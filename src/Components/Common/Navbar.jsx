import React from "react";
import { Link, useNavigate } from "react-router-dom"; // useNavigate را وارد کنید
import { FaBell, FaUser } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";

const Navbar = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="w-full h-24 flex items-center justify-between px-12">
      <div className="flex items-center space-x-4">
        <Link
          to="/"
          className="w-11 h-11 bg-customBlue rounded-full flex items-center justify-center text-white hover:bg-blue-800 ml-3"
        >
          <FaUser />
        </Link>
        {/* <Link
          to="/"
          className="w-11 h-11 bg-customBlue rounded-full flex items-center justify-center text-white hover:bg-blue-800"
        >
          <FaBell />
        </Link> */}
      </div>
      <div className="flex items-center">
        <button
          onClick={handleBack}
          className="hidden md:flex w-11 h-11 bg-customBlue rounded-full items-center justify-center text-white hover:bg-blue-800"
        >
          <IoIosArrowBack />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
