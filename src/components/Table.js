import React, { useEffect, useState } from "react";

const tableData = [
  {
    id: 1,
    updateDate: "11 Nov 2021",
    title: "Hammer",
    details: "This is a hammer to do work with",
    status: "Alright",
    quantity: "200/300",
    unitPrice: "10",
    amount: "2000.00",
  },
  {
    id: 2,
    updateDate: "10 Nov 2021",
    title: "Hammer",
    details: "This is a Screw to do work with",
    status: "Alright",
    quantity: "122/230",
    unitPrice: "10",
    amount: "1220.00",
  },
  {
    id: 3,
    updateDate: "6 Nov 2021",
    title: "Hammer",
    details: "Wood plan will be used to do woodworks, duh",
    status: "In Progress",
    quantity: "100/300",
    unitPrice: "15",
    amount: "150.00",
  },
  {
    id: 4,
    updateDate: "28 Nov 2021",
    title: "Hammer",
    details: "-",
    quantity: "0/200",
    unitPrice: "10",
    amount: "0.00",
  },
  {
    id: 5,
    updateDate: "22 Nov 2021",
    title: "Hammer",
    details: "-",
    quantity: "0/200",
    unitPrice: "10",
    amount: "0.00",
  },
  {
    id: 6,
    updateDate: "16 Nov 2021",
    title: "Hammer",
    details: "-",
    quantity: "0/200",
    unitPrice: "10",
    amount: "0.00",
  },
  {
    id: 7,
    updateDate: "11 Nov 2021",
    title: "Hammer",
    details: "This is a hammer to do work with",
    status: "Alright",
    quantity: "200/300",
    unitPrice: "10",
    amount: "2000.00",
  },
  {
    id: 8,
    updateDate: "11 Nov 2021",
    title: "Hammer",
    details: "This is a hammer to do work with",
    status: "Alright",
    quantity: "200/300",
    unitPrice: "10",
    amount: "2000.00",
  },
  {
    id: 9,
    updateDate: "11 Nov 2021",
    title: "Hammer",
    details: "This is a hammer to do work with",
    status: "Alright",
    quantity: "200/300",
    unitPrice: "10",
    amount: "2000.00",
  },
  {
    id: 10,
    updateDate: "11 Nov 2021",
    title: "Hammer",
    details: "This is a hammer to do work with",
    status: "Alright",
    quantity: "200/300",
    unitPrice: "10",
    amount: "2000.00",
  },
];

const Table = () => {
  return (
    <div className="w-full md:w-10/12 lg:w-9/12 md:ml-24 lg:ml-52 my-1 xs:p-2 text-black shadow-md font-bold z-10 rounded-sm bg-white">
      <div className="relative md:w-100 xl:w-100 my-3 ml-2">
        {/* search Bar */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 absolute left-2 top-2 text-gray-400"
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
          className="block sm:w-28 md:w-2/4 border-none rounded-xl focus:outline-none text-gray-700 bg-gray-200 text-base shadow py-2 pl-10"
        />
      </div>
      {/* table */}
      <table className="w-full">
        <thead className="-ml-3">
          <tr className="flex items-center xs:justify-between bg-tableHead">
            <th className="p-3 text-xs font-semibold xs:hidden md:inline-block inline-block text-left tracking-wide md:w-16 lg:w-4">
              <input type="checkbox" name="" id="" />
            </th>
            <th className="p-3 text-xs font-semibold xs:hidden sm:inline-block inline-block tracking-wide whitespace-nowrap text-left md:w-32 lg:w-28">
              <div className="flex">
                <p>Date Updated</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="md:w-4 sm:w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 13l-5 5m0 0l-5-5m5 5V6"
                  />
                </svg>
              </div>
            </th>
            <th className="p-3 text-xs font-semibold whitespace-nowrap text-left md:w-24 lg:w-12 xs:w-20">
              Title
            </th>
            <th className="p-3 text-xs font-semibold xs:hidden md:invisible lg:inline-block lg:visible tracking-wide whitespace-nowrap lg:w-56 text-left">
              Details
            </th>
            <th className="p-3 text-xs font-semibold xs:invisible sm:visible tracking-wide whitespace-nowrap text-left md:w-36  lg:w-28 lg:-ml-2">
              Status
            </th>
            <th className="p-3 text-xs font-semibold xs:invisible md:invisible tracking-wide lg:inline-block lg:visible text-right whitespace-nowrap md:w-24 lg:w-16">
              Quantity
            </th>
            <th className="p-3 text-xs font-semibold xs:hidden inline-block md:invisible lg:inline-block lg:visible tracking-wide whitespace-nowrap text-right md:w-16 lg:w-20 xs:w-28">
              Unit Price
            </th>
            <th className="p-3 text-xs font-semibold tracking-wide text-right flex whitespace-nowrap md:w-20 lg:w-20">
              <p>Amount</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                />
              </svg>
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr key={index} className="flex items-center xs:justify-between">
              <td className="p-3 text-xs font-semibold xs:hidden md:inline-block inline-block tracking-wide md:w-16 lg:w-4">
                <input type="checkbox" name="" id="" />
              </td>
              <td className="p-3 text-xs font-semibold xs:hidden sm:inline-block inline-block tracking-wide text-left whitespace-nowrap md:w-32 lg:w-24">
                {item.updateDate}
              </td>
              <td className="p-3 text-xs font-semibold text-left whitespace-nowrap md:w-24 lg:w-16 xs:w-20">
                {item.title}
              </td>
              <td className="p-3 text-xs font-semibold xs:hidden md:invisible lg:inline-block lg:visible tracking-wide text-left whitespace-nowrap lg:w-56">
                {item.details.length > 32
                  ? `${item.details.slice(0, 32)}...`
                  : item.details}
              </td>
              <td className="p-3 text-xs font-semibold xs:invisible sm:visible tracking-wide whitespace-nowrap text-left text-md md:w-28 lg:w-32 flex items-center -ml-3">
                {!item.status ? "Out of Stock" : item.status}
                {!item.status ? (
                  <div className="bg-red-500 m-1 rounded-full h-1 w-1"></div>
                ) : item.status === "Alright" ? (
                  <div className="bg-green-500 m-1 rounded-full h-1 w-1"></div>
                ) : (
                  <div className="bg-orange-500 m-1 rounded-full h-1 w-1"></div>
                )}
              </td>
              <td className="p-3 text-xs font-semibold xs:invisible md:visible tracking-wide lg:inline-block lg:visible whitespace-nowrap text-right md:w-24 lg:w-16">
                {item.quantity}
              </td>
              <td className="p-3 text-xs font-semibold xs:hidden inline-block md:invisible lg:inline-block lg:visible tracking-wide whitespace-nowrap text-right md:w-16 lg:w-20">
                ${item.unitPrice}
              </td>
              <td className="p-3 text-xs font-semibold tracking-wide whitespace-nowrap text-right md:w-28 lg:w-20 xs:w-20">
                ${item.amount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* pagination */}
      <div className="flex items-center justify-between my-3">
        <div className="border-2 rounded-sm xs:hidden md:flex lg:flex items-center justify-between">
          <p className="px-2 mr-2 text-sm font-thin">10 items per page</p>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 p-0.5 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </div>
        <div className="flex">
          <div className="w-32 border-2 rounded-sm flex items-center justify-between">
            <p className="px-2 text-sm font-thin ">Page 1 of 5</p>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 p-0.5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </div>
          <div className="border-2 rounded-sm mx-3 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 p-0.5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div className="border-2 rounded-sm flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 p-0.5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;

// checkbox m/
// Date Updated (down arrow)
// Title m/s
// Details
// Status m/s
// Quantity m/
// Unit Price
// Amount (two way arrow) m/s
