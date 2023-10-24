import Card from "@/components/Card";
import Layout from "@/components/Layout";
import Title from "@/components/Title";
import Container from "@/reusable-components/container";
import React, { useState } from "react";
import myData from "@/data/porfolioDatas";
import { Image } from "@/reusable-components";

const projects = () => {
  const [data] = useState(myData);

  return (
    <>
      <Layout title="My projects">
        <div className="mt-12 md:mt-32 px-4 md:px-0">
          <Title width="w-[85px] md:w-[200px]" />
          <div className="mt-7 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
            {data
              .map((item) => (
                <Card
                  key={item.id}
                  image={item.image}
                  title={item.header}
                  slug={item.slug}
                />
              ))
              .reverse()}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default projects;
