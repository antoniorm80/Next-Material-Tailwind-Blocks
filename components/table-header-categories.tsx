import React from "react";

// @material-tailwind/react
import {
  Button,
  Typography,
  Chip,
  Radio,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

import {
  ArrowDownTrayIcon,
  ChevronDownIcon,
  Bars4Icon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import { Squares2X2Icon } from "@heroicons/react/24/solid";

export function TableHeader6() {
  return (
    <section className="container mx-auto py-20 px-4">
      <div className="flex items-center gap-2 mb-4">
        <Chip value="companies" className="rounded-full" />
        <Chip
          value="projects"
          className="rounded-full text-gray-900 border-gray-300"
          variant="outlined"
        />
        <Chip
          value="teams"
          className="rounded-full text-gray-900 border-gray-300"
          variant="outlined"
        />
        <Chip
          value="members"
          className="rounded-full text-gray-900 border-gray-300"
          variant="outlined"
        />
      </div>
      <div className="flex justify-between md:items-center gap-y-4 flex-col md:flex-row">
        <div>
          <Typography className="font-bold">Companies</Typography>
          <Typography
            variant="small"
            className="font-normal text-gray-600"
          >
            Here you have details about the companies.
          </Typography>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="outlined"
            className="flex items-center gap-3 border-gray-300"
          >
            <ArrowDownTrayIcon
              strokeWidth={2.5}
              className="w-4 h-4 text-gray-900 "
            />
            download csv
          </Button>
          <Button color="gray" className="flex items-center gap-3">
            <PlusIcon strokeWidth={3} className="w-3 h-3 text-white" />
            add new
          </Button>
        </div>
      </div>
      <div className="!mt-4 border-gray-300 pt-2 border-t grid lg:grid-cols-2 grid-cols-1 items-center gap-y-2">
        <div className="w-full lg:max-w-md">
          <div className="flex flex-wrap gap-x-4">
            <Radio
              defaultChecked
              name="type"
              containerProps={{
                className: "-ml-3",
              }}
              label={
                <Typography
                  color="blue-gray"
                  variant="small"
                  className="font-medium"
                >
                  All
                </Typography>
              }
            />
            <Radio
              name="type"
              label={
                <Typography
                  color="blue-gray"
                  variant="small"
                  className="font-medium text-gray-600"
                >
                  Files
                </Typography>
              }
            />
            <Radio
              name="type"
              containerProps={{
                className: "-ml-3 md:ml-0",
              }}
              label={
                <Typography
                  color="blue-gray"
                  variant="small"
                  className="font-medium text-gray-600"
                >
                  Payments
                </Typography>
              }
            />
          </div>
        </div>
        <div className="flex items-center gap-2 lg:!ml-auto">
          <Menu>
            <MenuHandler>
              <Button
                variant="outlined"
                className="flex items-center gap-2 border-gray-300"
              >
                all files
                <ChevronDownIcon strokeWidth={3} className="w-3 h-3" />
              </Button>
            </MenuHandler>
            <MenuList>
              <MenuItem>All Files</MenuItem>
              <MenuItem>20 Files</MenuItem>
              <MenuItem>30 Files</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuHandler>
              <Button
                variant="outlined"
                className="flex items-center gap-2 border-gray-300"
              >
                Last 24h
                <ChevronDownIcon strokeWidth={3} className="w-3 h-3" />
              </Button>
            </MenuHandler>
            <MenuList>
              <MenuItem>Last 12</MenuItem>
              <MenuItem>Last 20h</MenuItem>
              <MenuItem>Last 2h</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuHandler>
              <Button
                variant="outlined"
                className="flex items-center gap-2 border-gray-300"
              >
                completed
                <ChevronDownIcon strokeWidth={3} className="w-3 h-3" />
              </Button>
            </MenuHandler>
            <MenuList>
              <MenuItem>Pending</MenuItem>
              <MenuItem>In Progress</MenuItem>
              <MenuItem>Not started yet</MenuItem>
            </MenuList>
          </Menu>
          <div className="md:flex hidden gap-2">
            <IconButton variant="outlined" className="border-gray-300">
              <Bars4Icon
                strokeWidth={2.5}
                className="w-4 h-4 text-gray-900"
              />
            </IconButton>
            <IconButton variant="outlined" className="border-gray-300">
              <Squares2X2Icon className="w-4 h-4 text-gray-900" />
            </IconButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TableHeader6;