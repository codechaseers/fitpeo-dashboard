import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Profit() {
  return (
    <div
      style={{ background: "rgb(31, 32, 41)" }}
      className=" lg:w-[37%] w-full h-[7.7em] rounded-md  "
    >
      <p className="ml-2 mt-1 text-[0.9em]">New Profit</p>
      <div className="flex items-center justify-between  w-full    pl-2 pr-5">
        <p className="text-[2em] font-bold">$67598.56</p>
        <CircularProgressbar
          value={75}
          text={`${75}%`}
          strokeWidth={13}
          className=" h-[4.5em] w-[5em] font-bold  text-end "
        />
      </div>
      <div className="flex items-center justify-between  w-full    pl-2 pr-2">
        <p className="text-green-500">ᐃ 3%</p>
        <p className="text-white-500 text-[0.5em]">
          "The value here has been round off.
        </p>
      </div>
    </div>
  );
}
