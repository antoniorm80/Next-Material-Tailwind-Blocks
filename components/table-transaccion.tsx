import React from "react";

// @material-tailwind/react
import {
  Chip,
  Button,
  Typography,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Checkbox,
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  IconButton,
  Avatar,
} from "@material-tailwind/react";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import {
  ArrowDownTrayIcon,
  EllipsisHorizontalIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";

const TABLE_ROW = [
  {
    id: "#MS-415646",
    logo: "https://www.material-tailwind.com/img/logos/figma.svg",
    title: "Figma INC",
    amount: "$14,000",
    date: "Jan 31, 2024, 3:00 PM",
    img: "https://www.material-tailwind.com/img/logos/visa.svg",
    account: "visa",
    accountNumber: "1234",
    expiry: "Expiry 06/2026",
    status: "completed",
  },
  {
    id: "#MS-415697",
    logo: "https://www.material-tailwind.com/img/logos/github.svg",
    title: "Medium",
    amount: "$2,500",
    date: "Feb 01, 2024, 1:00 PM",
    img: "https://www.material-tailwind.com/img/logos/master-card.png",
    account: "master-card",
    accountNumber: "1234",
    expiry: "Expiry 06/2026",
    status: "completed",
  },
  {
    id: "#MS-415698",
    logo: "https://www.material-tailwind.com/img/logos/spotify-logo.png",
    title: "Spotify",
    amount: "$5,000",
    date: "Feb 02, 2024, 3:00 PM",
    img: "https://www.material-tailwind.com/img/logos/visa.svg",
    account: "visa",
    accountNumber: "1234",
    expiry: "Expiry 06/2026",
    status: "pending",
  },
  {
    id: "#MS-415699",
    logo: "https://www.material-tailwind.com/img/logos/discord.svg",
    title: "Discord",
    amount: "$3,4,00",
    date: "Feb 02, 2024, 4:40 PM",
    img: "https://www.material-tailwind.com/img/logos/visa.svg",
    account: "visa",
    accountNumber: "1234",
    expiry: "Expiry 06/2026",
    status: "completed",
  },
  {
    id: "#MS-415700",
    logo: "https://www.material-tailwind.com/img/logos/dribbble.svg",
    title: "Dribbble Pro",
    amount: "$1,000",
    date: "Feb 02, 2024, 5:10 PM",
    img: "https://www.material-tailwind.com/img/logos/master-card.png",
    account: "master-card",
    accountNumber: "1234",
    expiry: "Expiry 06/2026",
    status: "failed",
  },
];

const TABLE_HEAD = [
  {
    head: "ID",
    icon: <Checkbox />,
  },
  {
    head: "Transaction",
  },
  {
    head: "Amount",
  },
  {
    head: "Date",
  },
  {
    head: "Account",
  },
  {
    head: "Status",
  },
  {
    head: "",
  },
];

export function TablesExample7() {
  return (
    <section className="container mx-auto m-10">
      <Card className="h-full w-full">
        <CardHeader
          floated={false}
          shadow={false}
          className="rounded-none flex flex-wrap gap-4 justify-between p-3"
        >
          <div>
            <Typography variant="h6" color="blue-gray">
              Transactions Table
            </Typography>
            <Typography
              variant="small"
              className="text-gray-600 font-normal mt-1"
            >
              These are details about the last transactions{" "}
            </Typography>
          </div>
          <div className="flex flex-wrap items-center w-full shrink-0 gap-4 md:w-max">
            <div className="w-full md:w-72">
              <Input
                label="Search"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              />
            </div>
            <div className="flex gap-4">
              <Button
                color="gray"
                variant="outlined"
                className="flex items-center gap-1 md:max-w-fit w-full"
              >
                filter
                <AdjustmentsVerticalIcon className="w-4 h-4 text-gray-900" />
              </Button>
              <Button
                color="gray"
                variant="outlined"
                className="flex items-center gap-1 md:max-w-fit w-full"
              >
                export
                <ArrowDownTrayIcon className="w-4 h-4 text-gray-900" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll !px-0 py-0">
          <table className="w-full min-w-max table-auto">
            <thead>
              <tr>
                {TABLE_HEAD.map(({ head, icon }) => (
                  <th
                    key={head}
                    className="border-b border-gray-300 !p-4"
                  >
                    <div className="flex gap-2 items-center">
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
                  logo,
                  title,
                  date,
                  status,
                  expiry,
                  account,
                  accountNumber,
                  amount,
                }) => {
                  const classes = "!p-4 border-b border-gray-300";
                  return (
                    <tr key={id}>
                      <td className={classes}>
                        <Checkbox
                          label={
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-bold"
                            >
                              {id}
                            </Typography>
                          }
                        />
                      </td>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <img className="w-6 h-6" src={logo} alt="" />
                          <Typography
                            variant="small"
                            className="font-bold"
                            color="blue-gray"
                          >
                            {title}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          className="!font-normal text-gray-600"
                        >
                          {amount}
                        </Typography>
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
                        <div className="flex items-center gap-3">
                          <div className="h-9 w-12 rounded-md border border-gray-300 p-1">
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
                              className="font-medium capitalize"
                            >
                              {account.split("-").join(" ")} {accountNumber}
                            </Typography>
                            <Typography
                              variant="small"
                              className="font-normal text-gray-600"
                            >
                              {expiry}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="w-max">
                          <Chip
                            variant="ghost"
                            value={status}
                            color={
                              status === "completed"
                                ? "green"
                                : status === "pending"
                                ? "amber"
                                : "red"
                            }
                          />
                        </div>
                      </td>
                      <td className="border-b border-gray-300 text-right pr-6">
                        <Menu placement="left-start">
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

export default TablesExample7;