import GetInTouch from "@/components/GetInTouch";
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
import Title from "@/components/Title";
import { useGlobalContext } from "@/providers/global.provider";
import { Image } from "@/reusable-components";
import Container from "@/reusable-components/container";
import { motion } from "framer-motion";

export default function Home() {
  const { showContact } = useGlobalContext();
  return (
    <>
      <Layout title="Home">
        <Container>
          <div className="flex justify-end relative">
            <Navbar />
          </div>
          <motion.div
            className="px-4 md:px-0 mt-24 md:mt-44"
          >
            <Title />
            <div
              className={`mt-6 md:mt-8 flex flex-col-reverse md:flex-row justify-between ${
                showContact ? `items-start` : `items-center`
              } gap-9 md:gap-20`}
            >
              <Profile />
              <motion.div
                whileHover={{ rotate: 3, y: 0 }}
                initial={{ rotate: 0, y: 0 }}
                className={`first-letter:cursor-pointer border-4 md:border-8 border-green-900 rounded-[16px] md:w-2/3 ${
                  showContact ? "hidden md:block " : "block"
                }`}
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
