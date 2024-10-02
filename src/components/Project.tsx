import { useGlobalContext } from "@/providers/global.provider";
import React, { useEffect } from "react";
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
          link={showSlug.link}
          stack={showSlug.stack}
          slug={showSlug.slug}
          deploy={showSlug.deploy}
        />
      )}
    </div>
  );
};

export default Project;
