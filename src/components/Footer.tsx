import { Text } from "@/reusable-components";
import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div>
      <motion.div transition={{type: "tween", duration: 0.5,}} animate={{x: 0}} initial={{x:150}} translate="yes" className="mt-20 py-4 flex justify-center items-center gap-2">
        <FaLaptopCode size={26} className="text-gray-400 text-xl" />
        <Text as="p" variant="p" className=" text-gray-400"> V.1.4</Text>
      </motion.div>
    </div>
  );
};

export default Footer;
