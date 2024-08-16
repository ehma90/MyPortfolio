import { useGlobalContext } from "@/providers/global.provider";
import React from "react";
import CardGroup from "./CardGroup";
import ProjectSlug from "./ProjectSlug";
import myDatas from "@/data/porfolioDatas";

const Project = () => {
  const { isDisplaying, showSlug } = useGlobalContext();

  return (
    <div>
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
    </div>
  );
};

export default Project;
