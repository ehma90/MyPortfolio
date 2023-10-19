import Card from "@/components/Card";
import Layout from "@/components/Layout";
import Title from "@/components/Title";
import Container from "@/tw-components/container";
import React from "react";

const projects = () => {
  return (
    <>
      <Layout title="My project page">
        <Container className="px-4 md:px-0">
          <div className="mt-12 md:mt-32">
            <Title width="w-[85px] md:w-[200px]"/>
            <div className="mt-6 flex flex-col-reverse md:flex-row justify-between items-center gap-9">
                {/* <Card /> */}
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default projects;
