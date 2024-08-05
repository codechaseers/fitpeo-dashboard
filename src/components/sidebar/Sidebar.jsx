import React from "react";
import {
  Navbar,
  Collapse,
  Button,
  IconButton,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import {
  RectangleStackIcon,
  UserCircleIcon,
  CommandLineIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/solid";

import {
  PowerIcon,
  Bars3Icon,
  XMarkIcon,
  BellIcon,
  Cog6ToothIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
// import { NavLink } from "react-router-dom";

// import KpiCard1 from "./kapa";
// import MembersTable from "./Table";
function NavItem({ children }) {
  return (
    <li>
      <Typography
        as="a"
        href="#"
        variant="paragraph"
        color="blue-gray"
        className="text-blue-gray-700 flex items-center gap-2 font-medium"
      >
        {children}
      </Typography>
    </li>
  );
}

function Sidebar({ open, navOpen, navStatus  }) {
  // console.log(adminDeatails);

  let check=open
  if(navStatus){
 check=navOpen
  }else{
    check=open
  }
  return (
    
    <>
        {check? (
        <>
          <div
            style={{ background: "rgb(31, 32, 41)" }}
            className={`drop-shadow-md ...    fixed  z-30  transform    p-4 transition-transform  h-full w-[5em]   `}
          >
            <div className="flex flex-col ">
              <article class="text-wrap ...">
                <h2 className="  text-gray-50 border-slate-200 mt-2 font-bold ... text-4xl">
                  {/* Hii... */}
                  <Squares2X2Icon className="h-9 w-9  text-teal-400 " />
                  {/* <RectangleStackIcon className="h-8 w-8 text-gray-50 " /> */}
                </h2>
                <h2 className=" text-gray-50 border-slate-200 mb-8 font-bold ... text-3xl">
                  {/* {adminDeatails && adminDeatails.AdminName} */}
                </h2>
              </article>
              {/* <hr class="border-gray-300"></hr> */}

              {/* <Typography variant="h2" color="blue-gray" className="mb-4 border-slate-200 text-wrap ">
      Hii,sudhanshusdsds
        </Typography> */}
              <ul className="flex flex-wrap  text-wrap  flex-col px-2 gap-7">
                <NavItem className="t">
                  <RectangleStackIcon className="h-6 w-6 text-gray-50 " />
                  {/* <p className="text-gray-100">pages</p> */}
                </NavItem>

                <NavItem>
                  <UserCircleIcon className="h-6 w-6 text-gray-50 " />
                  {/* <p className="text-gray-100">Members</p> */}
                </NavItem>

                <NavItem>
                  <Squares2X2Icon className="h-6 w-6 text-gray-50 " />
                  {/* <p className="text-gray-100"> Add category</p> */}
                </NavItem>

                <NavItem>
                  <CommandLineIcon className="h-6 w-6 text-gray-50 " />
                  {/* <p className="text-gray-100"> Add sub category</p> */}
                </NavItem>
                { navStatus ? (
                  <>
                    <div className="bg-blue-gray-700 rounded-full h-7 w-7 flex justify-center items-center  ">
                      <EnvelopeIcon
                        strokeWidth={2}
                        className="h-5 w-5 text-white text-center"
                      />
                    </div>
                    <div className="bg-blue-gray-700 rounded-full h-7 w-7 flex justify-center items-center  ">
                      <Cog6ToothIcon
                        strokeWidth={2}
                        className="h-5 w-5 text-white text-center"
                      />
                    </div>
                    <div className="bg-blue-gray-700 rounded-full h-7 w-7 flex justify-center items-center mr-6 ">
                      <BellIcon
                        strokeWidth={2}
                        className="h-5 w-5 text-white text-center"
                      />
                    </div>
                    <Avatar
                      src="https://docs.material-tailwind.com/img/face-2.jpg"
                      alt="avatar"
                      className="w-9 h-9"
                    />
                  </>
                ) : (
                  <></>
                )}
              </ul>

              {false ? (
                <>
                  <div className=" container mx-auto mt-3 border-t border-blue-gray-50 px-2 pt-4">
                    <ul className="flex flex-col gap-4">
                      <NavItem>
                        <RectangleStackIcon className="h-6 w-6" />P s
                      </NavItem>
                      <NavItem>
                        <UserCircleIcon className="h-6 w-6" />
                        Ac omy
                      </NavItem>
                      <NavItem>
                        <Squares2X2Icon className="h-6 w-6" />
                        Add category
                      </NavItem>
                      <NavItem>
                        <CommandLineIcon className="h-6 w-6" />
                        Docs
                      </NavItem>
                    </ul>
                    <div className="mt-6 mb-4 flex items-center gap-4">
                      <Button variant="text">Log in</Button>
                      <Avatar
                        src="https://docs.material-tailwind.com/img/face-2.jpg"
                        alt="avatar"
                      />
                    </div>
                  </div>
                </>
              ) : (
                <></>
              )}
              <></>
            </div>

            {/* End power Button section */}
            <div className="  h-[50vh] flex flex-col justify-end items-center">
              <PowerIcon className="h-5 w-5 text-gray-50 " />
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default Sidebar;
