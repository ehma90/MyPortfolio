"use client";

import React from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Project from "./Project";
import TechStack from "./TechStack";

const categories = [
  {
    name: "Projects",
    content: <Project />,
  },
  {
    name: "Tech Stack",
    content: <TechStack />,
  },
];

const TabContent = () => {
  return (
    <div className="flex w-full justify-center pt-5">
      <div className="w-full h-full">
        <TabGroup>
          <TabList className="flex gap-4">
            {categories.map(({ name }) => (
              <Tab
                key={name}
                className="rounded-md border border-white/50 hover:border-white py-1 px-3 text-sm/6 font-semibold text-white focus:outline-none data-[selected]:bg-white/20 data-[hover]:bg-white/5 data-[focus]:outline-1 data-[focus]:outline-white"
              >
                {name}
              </Tab>
            ))}
          </TabList>
          <TabPanels className="mt-3">
            {categories.map(({ name, content }) => (
              <TabPanel
                key={name}
                className="rounded-xl bg-white/[0.02] p-2 h-[80vh] overflow-y-auto"
              >
                {content}
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
};

export default TabContent;
