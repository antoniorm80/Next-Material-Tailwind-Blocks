import React from "react";

// @material-tailwind/react
import {
  Chip,
  Avatar,
  Button,
  Typography,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Checkbox,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  IconButton,
} from "@material-tailwind/react";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import {
  AdjustmentsVerticalIcon,
  ArrowDownTrayIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/solid";
import TableHeader4 from "./table-header-switch-date";

const TABLE_ROW = [
  {
    id: "#10421",
    img: "https://www.material-tailwind.com/image/avatar1.jpg",
    date: "01 Nov 2023, 10:20 AM",
    status: "paid",
    customer: "emma@mail.com",
    product: "Nike Sport 2",
    revenue: "$140,20",
    refunds: 13,
  },
  {
    id: "#10422",
    img: "https://www.material-tailwind.com/image/avatar2.jpg",
    date: "01 Nov 2023, 10:53 AM",
    status: "paid",
    customer: "andrew@mail.com",
    product: "Valvet T-Shirt",
    revenue: "$42,00",
    refunds: 40,
  },
  {
    id: "#10423",
    img: "https://www.material-tailwind.com/image/avatar4.jpg",
    date: "01 Nov 2023, 11:13 AM",
    status: "refunded",
    customer: "alice@mail.com",
    product: "Leather Wallet",
    revenue: "$25,50",
    refunds: 54,
  },
  {
    id: "#10424",
    img: "https://www.material-tailwind.com/image/avatar5.jpg",
    date: "01 Nov 2023, 12:20 AM",
    status: "paid",
    customer: "sebastian@mail.com",
    product: "Bracelet Onu-Lino",
    revenue: "$190,40",
    refunds: 25,
  },
  {
    id: "#10425",
    img: "https://www.material-tailwind.com/image/avatar6.jpg",
    date: "01 Nov 2023, 1:40 PM",
    status: "cancel",
    customer: "arrias@mail.com",
    product: "Phone Case Pink x2",
    revenue: "$200,90",
    refunds: 11,
  },
];

const TABLE_HEAD = [
  {
    head: "ID",
    icon: <Checkbox />,
  },
  {
    head: "Date",
  },
  {
    head: "Status",
  },
  {
    head: "Customer",
  },
  {
    head: "Product",
  },
  {
    head: "Revenue",
  },
  {
    head: "",
  },
];

export function TablesExample4() {
  return (
    <section className="container mx-auto m-10">
      <Card className="h-full w-full">
        <CardHeader
          floated={false}
          shadow={false}
          className="rounded-none flex flex-wrap gap-4 justify-between p-2"
        >
          <div>
            <Typography variant="h6" color="blue-gray">
              Orders Table
            </Typography>
            <Typography
              variant="small"
              className="text-gray-600 font-normal"
            >
              All status 2024
            </Typography>
          </div>
          <div className="flex items-center gap-4">
            <Button
              color="gray"
              variant="outlined"
              className="flex items-center gap-1"
            >
              filter
              <AdjustmentsVerticalIcon className="w-4 h-4 text-gray-900" />
            </Button>
            <Button
              color="gray"
              variant="outlined"
              className="flex items-center gap-1"
            >
              export
              <ArrowDownTrayIcon className="w-4 h-4 text-gray-900" />
            </Button>
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll !px-0 py-0">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map(({ head, icon }) => (
                  <th
                    key={head}
                    className="border-b border-gray-300 !p-4"
                  >
                    <div className="flex items-center">
                      {icon}
                      <Typography
                        color="blue-gray"
                        variant="small"
                        className="!font-bold"
                      >
                        {head}
                      </Typography>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROW.map(
                ({
                  id,
                  img,
                  date,
                  status,
                  customer,
                  product,
                  revenue,
                }) => {
                  const classes = "!p-4 border-b border-gray-300";
                  return (
                    <tr key={id}>
                      <td className={classes}>
                        <Checkbox
                          label={
                            <Typography
                              variant="small"
                              className="font-normal text-gray-600"
                            >
                              {id}
                            </Typography>
                          }
                        />
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          className="!font-normal text-gray-600"
                        >
                          {date}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <div className="w-max">
                        <Chip
                          variant="ghost"
                          value={status}
                          color={
                            status === "paid"
                              ? "green"
                              : status === "refunded"
                              ? "gray"
                              : "red"
                          }
                        />
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <Avatar src={img} alt={product} size="xs" />
                          <div>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="!font-normal text-gray-600"
                            >
                              {customer}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          className="!font-normal text-gray-600"
                        >
                          {product}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          className="!font-normal text-gray-600"
                        >
                          {revenue}
                        </Typography>
                      </td>
                      <td className="border-b border-gray-300 text-right pr-6">
                        <Menu>
                          <MenuHandler>
                            <IconButton variant="text">
                              <EllipsisHorizontalIcon className="w-8 h-8 text-gray-600" />
                            </IconButton>
                          </MenuHandler>
                          <MenuList>
                            <MenuItem>Edit</MenuItem>
                            <MenuItem>Update</MenuItem>
                            <MenuItem>Delete</MenuItem>
                          </MenuList>
                        </Menu>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
        <CardFooter className="flex justify-between items-center">
          <Typography variant="h6" color="blue-gray">
            Page 2{" "}
            <span className="font-normal text-gray-600">of 10</span>
          </Typography>
          <div className="flex gap-4">
            <Button
              variant="outlined"
              size="sm"
              className="flex items-center gap-1"
            >
              <ChevronLeftIcon strokeWidth={3} className="h-3 w-3" />
              prev
            </Button>
            <Button
              variant="outlined"
              className="flex items-center gap-1"
            >
              next
              <ChevronRightIcon strokeWidth={3} className="h-3 w-3" />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </section>
  );
}

export default TablesExample4;