import { Text } from "@/reusable-components";
import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div>
      <motion.div transition={{type: "tween", duration: 5,}} animate={{x: 0}} initial={{x:80}} translate="yes" className="mt-20 py-4 flex justify-center items-center gap-2">
        <FaLaptopCode size={30} className="text-green-900 text-4xl" />
        <Text as="h4" variant="h4" className=" text-gray-500"> v.1.1.0</Text>
      </motion.div>
    </div>
  );
};

export default Footer;
