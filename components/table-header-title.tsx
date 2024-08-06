import React from "react";

// @material-tailwind/react
import {
  Button,
  Typography,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

import {
  GlobeEuropeAfricaIcon,
  ShoppingBagIcon,
  TicketIcon,
} from "@heroicons/react/24/solid";

import { AdjustmentsVerticalIcon } from "@heroicons/react/24/outline";

export function TableHeader2() {
  return (
    <section className="container mx-auto py-20 px-4">
      <div className="flex justify-between md:items-center gap-y-4 flex-col md:flex-row">
        <div>
          <Typography className="font-bold">Top Selling Products</Typography>
          <Typography
            variant="small"
            className="font-normal text-gray-600"
          >
            Products based on their sales performance in the 2024.
          </Typography>
        </div>
        <div className="flex items-center gap-4">
          <Button color="gray" variant="outlined" className="!border-gray-300">
            view report
          </Button>
          <Menu>
            <MenuHandler>
              <Button
                color="gray"
                variant="outlined"
                className="flex items-center gap-1 !border-gray-300"
              >
                filter
                <AdjustmentsVerticalIcon
                  strokeWidth={2}
                  className="w-4 h-4 text-gray-900"
                />
              </Button>
            </MenuHandler>
            <MenuList>
              <MenuItem className="flex items-center gap-2 text-gray-900 font-medium">
                <ShoppingBagIcon className="h-4 w-4 !text-gray-500 hover:!text-gray-900" />
                Product Category
              </MenuItem>
              <MenuItem className="flex items-center gap-2 text-gray-900 font-medium">
                <TicketIcon className="h-4 w-4 !text-gray-500 hover:!text-gray-900" />
                Order Status
              </MenuItem>
              <MenuItem className="flex items-center gap-2 text-gray-900 font-medium">
                <GlobeEuropeAfricaIcon className="h-4 w-4 !text-gray-500 hover:!text-gray-900" />
                Sales Region
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
    </section>
  );
}

export default TableHeader2;