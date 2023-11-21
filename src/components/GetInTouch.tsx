import React, { useCallback, useState } from "react";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

const GetInTouch = () => {
  return (
    <motion.div
      animate={{ x: 0 }}
      initial={{ x: -200 }}
      transition={{ type: "spring", stiffness: 70, duration: 1 }}
      className=" w-full md:w-4/5"
    >
      <ContactForm />
    </motion.div>
  );
};

export default GetInTouch;
