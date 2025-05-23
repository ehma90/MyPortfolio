import { useGlobalContext } from "@/providers/global.provider";
import React, { useEffect } from "react";
import CardGroup from "./CardGroup";
import myDatas from "@/data/porfolioDatas";

const Project = () => {
  return (
    <div>
      <CardGroup data={myDatas} />
    </div>
  );
};

export default Project;
