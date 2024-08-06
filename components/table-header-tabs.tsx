import React from "react";

// @material-tailwind/react
import {
  Button,
  Typography,
  Input,
  Tabs,
  TabsHeader,
  Tab,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";

export function TableHeader5() {
  const data = [
    {
      label: "All Projects",
      value: "all projects",
    },
    {
      label: "Sprint1",
      value: "sprint1",
    },
    {
      label: "Sprint2",
      value: "sprint2",
    },
  ];

  return (
    <section className="container mx-auto py-20 px-4">
      <div className="flex justify-between md:items-center gap-y-4 flex-col md:flex-row">
        <div>
          <Typography className="font-bold">Company Projects</Typography>
          <Typography
            variant="small"
            className="font-normal text-gray-600"
          >
            Here you have details about the projects.
          </Typography>
        </div>
        <div>
          <Button color="gray" className="flex items-center gap-3">
            <PlusIcon strokeWidth={3} className="w-3 h-3 text-white" />
            new project
          </Button>
        </div>
      </div>
      <div className="!mt-4 grid lg:grid-cols-2 grid-cols-1 items-center gap-y-6">
        <div className="w-full lg:max-w-md">
          <Tabs value="all projects">
            <TabsHeader>
              {data.map(({ label, value }) => (
                <Tab className="!font-medium" key={value} value={value}>
                  {label}
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
        </div>
        <div className="flex items-center gap-3 lg:!ml-auto">
          <div className="flex items-center gap-2">
            <Typography
              variant="small"
              className="font-normal shrink-0 text-gray-600"
            >
              Sort by
            </Typography>
            <Menu>
              <MenuHandler>
                <Button
                  variant="outlined"
                  className="flex items-center gap-2 w-full !border-gray-300"
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
          </div>
          <div className="lg:w-80 w-full">
            <Input
              size="lg"
              label="Search"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TableHeader5;