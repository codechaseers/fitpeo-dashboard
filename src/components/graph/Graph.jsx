import {
    Card,
    CardBody,
    CardHeader,
    Typography,
  } from "@material-tailwind/react";
  import Chart from "react-apexcharts";
  import { Square3Stack3DIcon } from "@heroicons/react/24/outline";
   
  // If you're using Next.js please use the dynamic import for react-apexcharts and remove the import from the top for the react-apexcharts
  // import dynamic from "next/dynamic";
  // const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
   
  const chartConfig = {
    type: "bar",
    height: 240,
    series: [
      {
        name: "Sales",
        data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      title: {
        show: "",
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#1E90FF"],
      plotOptions: {
        bar: {
          columnWidth: "40%",
          borderRadius: 2,
        },
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          style: {
            colors: "white",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
        categories: [
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      yaxis: {
        labels: {
          style: {
            colors: "white",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
      },
      // grid: {
      //   show: true,
      //   borderColor: "#dddddd",
      //   strokeDashArray: 5,
      //   xaxis: {
      //     lines: {
      //       show: true,
      //     },
      //   },
      //   padding: {
      //     top: 5,
      //     right: 20,
      //   },
      // },
      fill: {
        opacity: 0.8,
      },
      tooltip: {
        theme: "dark",
      },
    },
  };
   
  export default function Graph() {
    return (
      <Card>
       
        <CardBody className="px-2 pb-0  h-[18em] rounded-md  " style={{ background: "rgb(31, 32, 41)" }}>
          <Chart {...chartConfig} />
        </CardBody>
      </Card>
    );
  }