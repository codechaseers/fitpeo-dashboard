import React from 'react'
import {
    RectangleStackIcon,
    UserCircleIcon,
    CommandLineIcon,
    Squares2X2Icon,
  } from "@heroicons/react/24/solid";
export default function Order() {
  return (
    <div className=" scroll-container lg:w-[60%] w-full h-[7.7em] bg-blue-gray- flex flex-wrap  items-center gap-4   overflow-scroll bg-blue-gray-20 0">
    <style jsx>{`
      .scroll-container::-webkit-scrollbar {
        display: none; /* Chrome, Safari and Opera */
      }
      .scroll-container {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
      }
    `}</style>
    <div
      style={{ background: "rgb(31, 32, 41)" }}
      className=" h-full w-[10em] rounded-[0.3em] "
    >
      <div className="m-2">
        <div className="icon-container bg-blue-700 rounded-md w-8 h-8 flex items-center justify-center  ">
          <CommandLineIcon className="h-6 w-6 text-blue-100  " />
        </div>
        <p className="mt-[0.4em]">Total Orders</p>
        <div className="flex flex-wrap w-full gap-[2em]  justify-between items-center ">
          <p className="text-[1.7em] font-bold  ">79</p>
          <p className="text-green-500">ᐃ 3%</p>
        </div>
      </div>
    </div>

    <div
      style={{ background: "rgb(31, 32, 41)" }}
      className=" h-full w-[10em] rounded-[0.3em] "
    >
      <div className="m-2">
        <div className="icon-container bg-green-700 rounded-md w-8 h-8 flex items-center justify-center ">
          <Squares2X2Icon className="h-6 w-6 text-green-100  " />
        </div>
        <p className="mt-[0.4em]">Total Orders</p>
        <div className="flex flex-wrap w-full gap-[2em] justify-between  items-center ">
          <p className="text-[1.7em] font-bold  ">70</p>
          <p className="text-red-500">ᐁ 3%</p>
        </div>
      </div>
    </div>
    <div
      style={{ background: "rgb(31, 32, 41)" }}
      className=" h-full w-[10em] rounded-[0.3em] "
    >
      <div className="m-2">
        <div className="icon-container bg-pink-700 rounded-md w-8 h-8 flex items-center justify-center ">
          <Squares2X2Icon className="h-6 w-6 text-li-pink-100  " />
        </div>
        <p className="mt-[0.4em]">Total Orders</p>
        <div className="flex flex-wrap w-full gap-[2em]  justify-between  items-center ">
          <p className="text-[1.7em] font-bold  ">05</p>
          <p className="text-green-500 ">ᐃ 3%</p>
        </div>
      </div>
    </div>
    <div
      style={{ background: "rgb(31, 32, 41)" }}
      className=" h-full  w-[10em] rounded-[0.3em] "
    >
      <div className="m-2">
        <div className="icon-container bg- bg-red-700 rounded-md w-8 h-8 flex items-center justify-center ">
          <Squares2X2Icon className="h-6 w-6 text-red-100  " />
        </div>
        <p className="mt-[0.4em]">Total Orders</p>
        <div className="flex flex-wrap w-full gap-[2em]  justify-between items-center ">
          <p className="text-[1.7em] font-bold  ">$12k</p>
          <p className="text-red-500">ᐁ 3%</p>
        </div>
      </div>
    </div>
  </div>
  )
}
