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
        className={`w-16 h-16 mt-3 hidden md:block`}
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
          className="text-2xl md:text-5xl font-extralight font-sans"
        >
          <span className="font-bold text-blue">Emmanuel</span> Essien
        </Text>
        <p className="font-medium md:text-base">
          FullStack Web & Mobile Developer || Security Analyst
        </p>
        <div
          className={`shadow-lg shadow-white/50
          w-56 border border-white/50`}
        />
      </div>
    </div>
  );
};

export default Title;
