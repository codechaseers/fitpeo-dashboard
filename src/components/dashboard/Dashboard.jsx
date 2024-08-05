import React from "react"; 
 

import Graph from "../graph/Graph";
import { Table } from "../table/Table";

import Order from "../orders/Order";
import Profit from "../profit/Profit ";
import Goals from "../goals/Goals";
import Feedback from "../Feed/Feedback";

export default function Dashboard() {
  return (
    <div className="flex lg:flex-row  flex-col flex-wrap gap-[0.9em] ml-3">
      {/* div1 */}
      <Order />
      {/* div2 */}
      <Profit />

      {/* div3 */}
      <div className=" lg:w-[60%] w-full h-[18em]  ">
        <Graph />
      </div>

      {/* div4 */}

      <Goals />

      {/* div5 */}
      <div className=" lg:w-[60%] h-[20em]  w-full">
        <Table />
      </div>

      {/* div6 */}
 
      <Feedback/>

    </div>
  );
}
