import React from "react";

const Sidebar = () => {
  return (
    <div className="fixed xs:w-full md:w-20 lg:w-48 md:h-full xs:h-16 xs:mt-10 md:top-6 lg:top-6 left-0 shadow-md z-30">
      <div className="py-1 xs:flex xs:flex-row xs:items-center md:flex-col md:justify-start md:h-full xs:h-16 xs:justify-around xs:border-2 md:bg-gray-200 lg:bg-gray-200 xs:bg-white">
        {/* Dashboard */}
        <a
          href="#"
          className="flex item-center md:w-12 lg:w-10/12 lg:m-4 lg:p-4 md:mt-4 md:ml-2 text-black hover:border-2 hover:drop-shadow-lg md:hover:drop-shadow-md hover:bg-white rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 lg:m-0 md:ml-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <p className=" xs:hidden md:hidden inline-block lg:inline-block lg:pl-2">
            Dashboard
          </p>
        </a>
        {/* inventory */}
        <a
          href="#"
          className="flex item-center md:w-12 lg:w-10/12 md:h-8 lg:h-16 lg:m-4 lg:p-4 md:mt-4 md:ml-2 text-green-500 md:border-2 lg:border-2 md:drop-shadow-lg xs:drop-shadow-none lg:drop-shadow-lg md:bg-white lg:bg-white rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 lg:m-0 md:ml-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <p className="xs:hidden md:hidden inline-block lg:inline-block lg:pl-2">
            Inventory
          </p>
        </a>
        {/* Doccuments */}
        <a
          href="#"
          className="flex item-center md:w-12 lg:w-10/12 lg:m-4 lg:p-4 md:mt-4 md:ml-2  text-black hover:border-2 hover:drop-shadow-lg hover:bg-white rounded-md"
        >
          <svg
            className="w-3  lg:m-0 md:ml-4 lg:ml-1 "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path d="M365.3 93.38l-74.63-74.64C278.6 6.742 262.3 0 245.4 0L64-.0001c-35.35 0-64 28.65-64 64l.0065 384c0 35.34 28.65 64 64 64H320c35.2 0 64-28.8 64-64V138.6C384 121.7 377.3 105.4 365.3 93.38zM336 448c0 8.836-7.164 16-16 16H64.02c-8.838 0-16-7.164-16-16L48 64.13c0-8.836 7.164-16 16-16h160L224 128c0 17.67 14.33 32 32 32h79.1V448zM96 280C96 293.3 106.8 304 120 304h144C277.3 304 288 293.3 288 280S277.3 256 264 256h-144C106.8 256 96 266.8 96 280zM264 352h-144C106.8 352 96 362.8 96 376s10.75 24 24 24h144c13.25 0 24-10.75 24-24S277.3 352 264 352z" />
          </svg>
          <p className="xs:hidden md:hidden inline-block lg:inline-block lg:pl-2">
            Doccuments
          </p>
        </a>
        {/* Settings */}
        <a
          href="#"
          className="flex item-center md:w-12 lg:w-10/12 lg:m-4 lg:p-4 md:mt-4 md:ml-2 md:ml-2  text-black hover:border-2 hover:drop-shadow-lg hover:bg-white rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 lg:m-0 md:ml-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <p className="xs:hidden md:hidden inline-block lg:inline-block lg:pl-2">
            Settings
          </p>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
