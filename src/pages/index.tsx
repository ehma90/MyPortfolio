import GetInTouch from "@/components/GetInTouch";
import Layout from "@/components/Layout";
import Profile from "@/components/Profile";
import Title from "@/components/Title";
import { useGlobalContext } from "@/providers/global.provider";
import { Image, Text } from "@/reusable-components";
import Container from "@/reusable-components/container";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [rotate, setRotate] = useState(false);

  const { showContact } = useGlobalContext();
  return (
    <>
      <Layout title="Home">
        <Container>
          <motion.div
            animate={{ y: 0 }}
            initial={{ y: 100 }}
            className="px-4 md:px-0 mt-12 md:mt-32 w-full md:w-[1024px]"
          >
            <Title />
            <div className="mt-6 md:mt-8 flex flex-col-reverse md:flex-row justify-between items-center gap-9 md:gap-20">
              {!showContact ? <Profile /> : <GetInTouch />}
              <motion.div
                whileHover={{ rotate: 8, y:0 }}
                initial={{ rotate: 0, y:0 }}
                className={` first-letter:cursor-pointer border-4 md:border-8 border-green-900 rounded-[16px] md:w-1/2 ${showContact ? 'hidden md:block ' : 'block'}`}
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
