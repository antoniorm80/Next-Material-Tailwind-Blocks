import React from "react";

// @material-tailwind/react
import {
  Button,
  Typography,
  Switch,
  PopoverContent,
  Popover,
  PopoverHandler,
  Input,
} from "@material-tailwind/react";

// @heroicons/react
import {
  CalendarDaysIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

// day picker
import { DayPicker } from "react-day-picker";

export function TableHeader4() {
  const [date, setDate] = React.useState();

  return (
    <section className="container mx-auto py-20 px-4">
      <div className="flex justify-between md:items-center gap-y-3 flex-col md:flex-row">
        <div>
          <Typography className="font-bold">Overview Balance</Typography>
          <Typography
            variant="small"
            className="font-normal text-gray-600"
          >
            Here you have details about the balance.
          </Typography>
        </div>
        <div className="flex items-center gap-3">
          <Popover placement="bottom">
            <PopoverHandler>
              <Button
                variant="outlined"
                className="flex items-center gap-3 !border-gray-300"
              >
                01 Jan, 2023 - 01 Jan, 2024
                <CalendarDaysIcon
                  strokeWidth={2}
                  className="w-4 h-4 text-gray-600"
                />
              </Button>
            </PopoverHandler>
            <PopoverContent>
              <DayPicker
                mode="single"
                selected={date}
                onSelect={setDate as any}
                showOutsideDays
                className="border-0"
                classNames={{
                  caption:
                    "flex justify-center py-2 mb-4 relative items-center",
                  caption_label: "text-sm !font-medium text-gray-900",
                  nav: "flex items-center",
                  nav_button:
                    "h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300",
                  nav_button_previous: "absolute left-1.5",
                  nav_button_next: "absolute right-1.5",
                  table: "w-full border-collapse",
                  head_row: "flex !font-medium text-gray-900",
                  head_cell: "m-0.5 w-9 !font-normal text-sm",
                  row: "flex w-full mt-2",
                  cell: "text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                  day: "h-9 w-9 p-0 !font-normal",
                  day_range_end: "day-range-end",
                  day_selected:
                    "rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white",
                  day_today: "rounded-md bg-gray-200 text-gray-900",
                  day_outside:
                    "day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",
                  day_disabled: "text-gray-500 opacity-50",
                  day_hidden: "invisible",
                }}
                components={{
                  IconLeft: ({ ...props }) => (
                    <ChevronLeftIcon
                      {...props}
                      className="h-4 w-4 stroke-2"
                    />
                  ),
                  IconRight: ({ ...props }) => (
                    <ChevronRightIcon
                      {...props}
                      className="h-4 w-4 stroke-2"
                    />
                  ),
                }}
              />
            </PopoverContent>
          </Popover>
          <Button variant="outlined" className="!border-gray-300" onClick={()=> {alert("Viendo el reporte")}}>
            view report
          </Button>
        </div>
      </div>
      <div className="mt-3 flex justify-between md:items-center gap-y-4 flex-col md:flex-row">
        <Switch
          label={
            <Typography
              variant="small"
              className="font-medium text-gray-600"
            >
              Refunds Only
            </Typography>
          }
        />
      </div>
    </section>
  );
}

export default TableHeader4;