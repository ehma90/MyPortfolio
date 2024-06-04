import Card from "@/components/Card";
import Layout from "@/components/Layout";
import Title from "@/components/Title";
import React from "react";
import myData from "@/data/porfolioDatas";
import { motion } from "framer-motion";
import Container from "@/reusable-components/container";
import Navbar from "@/components/Navbar";

const Projects = () => {
  return (
    <>
      <Layout title="My projects">
        <Container>
          <div className="flex justify-end relative">
            <Navbar />
          </div>
          <div className="mt-24 md:mt-44 px-4 md:px-0">
            <Title width="w-[110px] md:w-[155px]" />
            <motion.div
              animate={{ y: 0 }}
              initial={{ y: 200 }}
              transition={{ duration: 0.9 , type:"spring"}}
              className="mt-7 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {myData
                .map((item) => (
                  <Card
                    key={item.id}
                    image={item.image}
                    title={item.header}
                    slug={item.slug}
                  />
                ))
                .reverse()}
            </motion.div>
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default Projects;
