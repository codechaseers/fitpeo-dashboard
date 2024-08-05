 import React from 'react'
 import {
    RectangleStackIcon,
    UserCircleIcon,
    CommandLineIcon,
    Squares2X2Icon,
    BriefcaseIcon,
    LifebuoyIcon,
    BuildingStorefrontIcon
    
  } from "@heroicons/react/24/solid";
  import {
    Bars3Icon,
    XMarkIcon,
    BellIcon,
    Cog6ToothIcon,
    EnvelopeIcon,
    ArchiveBoxIcon,
     CakeIcon,
     BanknotesIcon
    
    
  } from "@heroicons/react/24/outline";
 
 export default function Goals() {
   return (
    <div
        className=" lg:w-[37%] h-[18em]  w-full pt-3 rounded-md "
        style={{ background: "rgb(31, 32, 41)" }}
        s
      >
        <div className="flex items-center  justify-between m-4">
          <div className="flex items-center gap-2">
            <div className=" bg-red-900 h-[4em] w-[4em] flex items-center justify-center rounded-full ">
              <ArchiveBoxIcon className="h-7 w-7 text-red-100  " />
            </div>
            <p>Golas</p>
          </div>
          <div className="h-[2em] w-[1.5em] mr-2 text-balance  ">
            {" "}
            <p className="text-center  rounded-[100%]   bg-blue-gray-800">
              &gt;
            </p>
          </div>
        </div>
        <div className="flex   items-center  justify-between m-4">
          <div className="flex items-center gap-2">
            <div className=" bg-blue-900 h-[4em] w-[4em] flex items-center justify-center rounded-full ">
              <CakeIcon className="h-7 w-7 text-blue-100  " />
            </div>
            <p>Popular Dishes</p>
          </div>
          <div className="h-[2em] w-[1.5em] mr-2 text-balance  ">
            {" "}
            <p className="text-center  rounded-[100%]   bg-blue-gray-800">
              &gt;
            </p>
          </div>
        </div>
        <div className="flex   items-center  justify-between m-4">
          <div className="flex items-center gap-2">
            <div className=" bg-teal-900 h-[4em] w-[4em] flex items-center justify-center rounded-full ">
              <BanknotesIcon className="h-7 w-7 text-teal-100  " />
            </div>
            <p>Menus</p>
          </div>
          <div className="h-[2em] w-[1.5em] mr-2 text-balance  ">
            {" "}
            <p className="text-center  rounded-[100%]   bg-blue-gray-800">
              &gt;
            </p>
          </div>
        </div>
      </div>
   )
 }
 