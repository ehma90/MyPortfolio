"use client";

import React from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import myDatas from "@/data/porfolioDatas";
import CardGroup from "./CardGroup";
import { useGlobalContext } from "@/providers/global.provider";
import ProjectSlug from "./ProjectSlug";

const categories = [
  {
    name: "Projects",
    content: "",
  },
];

const TabContent = () => {
  const { isDisplaying, showSlug } = useGlobalContext();
  return (
    <div className="flex w-full justify-center pt-10">
      <div className="w-full h-full">
        <TabGroup>
          <TabList className="flex gap-4">
            {categories.map(({ name }) => (
              <Tab
                key={name}
                className="rounded-full py-1 px-3 text-sm/6 font-semibold text-white focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white"
              >
                {name}
              </Tab>
            ))}
          </TabList>
          <TabPanels className="mt-3">
            {categories.map(({ name }) => (
              <TabPanel
                key={name}
                className="rounded-xl bg-white/10 p-6 h-[70vh] overflow-y-auto"
              >
                {!isDisplaying ? (
                  <CardGroup data={myDatas} />
                ) : (
                  <ProjectSlug
                    id={showSlug.id}
                    image={showSlug.image}
                    header={showSlug.header}
                    text={showSlug.text}
                    slug=""
                    link={showSlug.link}
                    stack={showSlug.stack}
                    deploy={showSlug.deploy}
                  />
                )}
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
};

export default TabContent;
