import { PencilIcon } from "@heroicons/react/24/solid";
import {
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
  Input,
} from "@material-tailwind/react";
 
const TABLE_HEAD = ["Transaction", "Order No"  ,"Amount" ,"Status" ];
 
const TABLE_ROWS = [
  {
    img: "https://th.bing.com/th/id/OIP.O5MK6g-T2inIwOh-at-0NgHaHZ?w=768&h=767&rs=1&pid=ImgDetMain",
    name: "Alex sol",
    amount: "$2,500",
    order: "65754668",
    status: "cancelled",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "https://th.bing.com/th/id/R.36fc3057651f0fe652612e376a3d5153?rik=FvavN9ema7GzPg&riu=http%3a%2f%2fpetapixel.com%2fassets%2fuploads%2f2019%2f02%2fdownload-2-800x800.jpeg&ehk=6tYvl0vWgGztb0h1tKXc264agdodqpp7TsF7hOEExNE%3d&risl=&pid=ImgRaw&r=0",
    name: " Neha shaoo",
    amount: "$5,000",
    order: "65754668",
    status: "cancelled",
    account: "master-card",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "https://youmiia.com/cdn/shop/files/Mikey_Heffernan_-_Youmiia.jpg?v=1657292064&width=1500",
    name: "Sudhanshu Ojha",
    amount: "$3,400",
    order: "65754668",
    status: "delivered",
    account: "master-card",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "https://www.bing.com/th?id=OIP.qEQ1Ba7S5XdXj3x-yYx7iwHaE8&w=190&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
    name: " Satyam saho",
    amount: "$1,000",
    order: "06754668",
    status: "delivered",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "https://yt3.googleusercontent.com/OmSE5Rmnj4e5FkjkUpOsIc7ZclYV4nlrD8D_84YlDsZHNzWsunQx-U_cvyJDdwJJTBfZbnfcyg=s900-c-k-c0x00ffffff-no-rj",
    name: " Rakesh",
    amount: "$14,000",
    order: "34754668",
    status: "cancelled",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
];
 
export function Table() {
  return (
    <Card className="h-full w-full    " style={{ background: "rgb(31, 32, 41)" }}>
        
      <CardHeader floated={false} shadow={false} className="rounded-none">
        {/* <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Typography variant="h5" color="blue-gray">
              Recent Transactions
            </Typography>
            
          </div>
         
        </div> */}
      </CardHeader>
      <CardBody className=" table-scrool overflow-scroll px-0">
        {/* Table scroll bar hide  */}
      <style jsx>{`
          .table-scrool::-webkit-scrollbar {
            display: none; /* Chrome, Safari and Opera */
          }       
        `}</style>
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y   p-4"
                >
                  <Typography
                    variant="small"
                  
                    className="font-normal leading-none  text-white"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(
              (
                {
                  img,
                  name,
                  amount,
                  order,
                  status,
                  account,
                  accountNumber,
                  expiry,
                },
                index,
              ) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";
 
                return (
                  <tr key={name}>
                    <td className={classes}>
                      <div className="flex items-center gap-3 ">
                        <Avatar
                          src={img}
                          alt={name}
                          size="md"
                          className="     object-contain p-1"
                        />
                        <Typography
                          variant="small"
                        //   color="blue-gray"
                          className="font-bold text-white"
                        >
                          {name}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        // color="blue-gray"
                        className="font-normal text-white"
                      >
                      
                        {order}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        // color="blue-gray"
                        className="font-normal text-white"
                      >
                          {amount}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          size="sm"
                          variant="ghost"
                          value={status}
                          color={
                            status === "delivered"
                              ? "green"                               
                              : "red"
                          }
                        />
                      </div>
                    </td>
                    {/* <td className={classes}>
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-12 rounded-md border border-blue-gray-50 p-1">
                          <Avatar
                            src={
                              account === "visa"
                                ? "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/visa.png"
                                : "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/mastercard.png"
                            }
                            size="sm"
                            alt={account}
                            variant="square"
                            className="h-full w-full object-contain p-1"
                          />
                        </div>
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal capitalize"
                          >
                            {account.split("-").join(" ")} {accountNumber}
                          </Typography>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {expiry}
                          </Typography>
                        </div>
                      </div>
                    </td> */}
                   
                  </tr>
                );
              },
            )}
          </tbody>
        </table>
      </CardBody>
      {/* <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Button variant="outlined" size="sm">
          Previous
        </Button>
        <div className="flex items-center gap-2">
          <IconButton variant="outlined" size="sm">
            1
          </IconButton>
          <IconButton variant="text" size="sm">
            2
          </IconButton>
          <IconButton variant="text" size="sm">
            3
          </IconButton>
          <IconButton variant="text" size="sm">
            ...
          </IconButton>
          <IconButton variant="text" size="sm">
            8
          </IconButton>
          <IconButton variant="text" size="sm">
            9
          </IconButton>
          <IconButton variant="text" size="sm">
            10
          </IconButton>
        </div>
        <Button variant="outlined" size="sm">
          Next
        </Button>
      </CardFooter> */}
    </Card>
  );
}