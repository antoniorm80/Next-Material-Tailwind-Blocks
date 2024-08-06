import React from "react";

// @material-tailwind/react
import { Button, Typography, Input } from "@material-tailwind/react";

import {
  AdjustmentsVerticalIcon,
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import { XCircleIcon } from "@heroicons/react/24/solid";

export function TableHeader3() {
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
        <div className="flex items-center gap-3">
          <Button
            variant="outlined"
            className="flex items-center gap-3 !border-gray-300"
          >
            <PlusIcon
              strokeWidth={3}
              className="w-3 h-3 text-gray-900"
            />
            add new
          </Button>
          <Button color="gray" className="flex items-center gap-3">
            <ArrowDownTrayIcon
              strokeWidth={2}
              className="w-4 h-4 text-white"
            />
            export
          </Button>
        </div>
      </div>
      <div className="!mt-4 flex justify-between md:items-center gap-y-4 flex-col md:flex-row">
        <div className="flex md:items-center gap-3">
          <Button
            size="sm"
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
          <Button
            size="sm"
            variant="outlined"
            className="flex items-center gap-1 !border-gray-300"
          >
            Bestselling
            <XCircleIcon
              strokeWidth={2}
              className="w-5 h-5 text-gray-900"
            />
          </Button>
          <Button
            size="sm"
            variant="outlined"
            className="flex items-center gap-1 !border-gray-300"
          >
            last 30 days
            <XCircleIcon
              strokeWidth={2}
              className="w-5 h-5 text-gray-900"
            />
          </Button>
        </div>
        <div className="lg:w-96">
          <Input
            label="Search"
            icon={<MagnifyingGlassIcon className="h-5 w-5" />}
          />
        </div>
      </div>
    </section>
  );
}

export default TableHeader3;