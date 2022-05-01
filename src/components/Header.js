import DownArrow from "./DownArrow";
import React from "react";
import profileImage from "../assets/images/profile-image.jpg";

const Header = () => {
  return (
    <nav className="h-16 bg-white shadow-sm px-8 fixed w-full top-0 left-0 flex items-center">
      {/* logo */}
      <div className="flex items-center">
        <p className="text-black sm:font-bold md:font-bold w-0 sm:w-min md:w-min text-base text-center py-5 ">
          Starbucks
        </p>
        <div className="ml-16 sm:ml-0 md:ml-0 ">
          <DownArrow />
        </div>
      </div>
      {/* navbar left */}
      <div className="relative w-1 sm:w-72 md:w-72 xl:w-100 sm:ml-10 md:ml-20">
        {/* search Bar */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 absolute left-2 top-2 text-gray-400 invisible sm:visible md:visible xl:visible"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search"
          className="block invisible sm:visible md:visible xl:visible sm:w-28 md:w-52 xl:w-72 border-none rounded-xl focus:outline-none text-gray-600 bg-gray-200 text-base shadow py-2 pl-10"
        />
      </div>
      {/* navbar right */}
      <div className="ml-auto flex items-center">
        <div className="cursor-pointer">
          {/* bell icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 cursor-pointer text-gray-600 hover:text-gray-900"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </div>
        <div className="ml-4 relative cursor-pointer">
          {/* profile image */}
          <div className="flex items-center justify-items-center">
            <img
              className="w-8 h-8 rounded-full object-cover"
              src={profileImage}
              alt=""
            />
            <p className="text-black sm:text-xs md:text-sm sm:font-medium md:font-medium ml-2">
              Jhon Doe
            </p>
            {/* down arrow */}
            <div className="">
              <DownArrow />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
