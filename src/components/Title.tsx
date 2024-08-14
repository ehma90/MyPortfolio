import { Text } from "@/reusable-components";
import React, { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Title: FC = () => {
  return (
    <div className="flex flex-row gap-5">
      <motion.div
        whileHover={{ rotate: 3, y: 0 }}
        initial={{ rotate: 0, y: 0 }}
        className={` w-16 h-16 mt-3`}
      >
        <Image
          src="/assets/emmanuel.jpg"
          width={500}
          height={500}
          alt="My photo"
          className=" object-cover w-full h-full rounded-full pointer-events-none"
        />
      </motion.div>
      <div>
        <Text
          as="h1"
          variant="h1"
          className="text-2xl md:text-6xl font-extralight whitespace-nowrap font-sans"
        >
          <span className="font-bold text-blue">Emmanuel</span> Essien
        </Text>
        <p className="font-medium md:text-2xl">
          Software developer | Security Analyst
        </p>
        <div
          className={`shadow-lg shadow-green-900/50
          w-72 border border-white/50`}
        />
      </div>
    </div>
  );
};

export default Title;
