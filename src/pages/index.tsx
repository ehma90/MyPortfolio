import Layout from "@/components/Layout";
import Profile from "@/components/Profile";
import Title from "@/components/Title";
import { Image, Text } from "@/reusable-components";
import Container from "@/reusable-components/container";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [rotate, setRotate] = useState(false);
  return (
    <>
      <Layout title="Home">
        <Container>
          <motion.div
            animate={{ y: 0 }}
            initial={{ y: 100 }}
            className="px-4 md:px-0 mt-12 md:mt-32 w-full"
          >
            <Title />
            <div className="w-full mt-6 flex flex-col-reverse md:flex-row justify-between items-center gap-9 md:gap-20">
              <Profile />
              <motion.div
                whileHover={{ rotate: 8 }}
                initial={{rotate:0}}
                className=" cursor-pointer border-4 md:border-8 border-green-900 rounded-[16px]"
              >
                <Image
                  src="/assets/Emmanuel.jpeg"
                  width={500}
                  height={500}
                  alt="My photo"
                  className=" object-cover w-full h-full rounded-[12px] md:rounded-lg pointer-events-none"
                />
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </Layout>
    </>
  );
}
