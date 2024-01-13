import React, { useCallback, useState } from "react";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import Container from "@/reusable-components/container";

const GetInTouch = () => {
  return (
    <motion.div
      animate={{ x: 0 }}
      initial={{ x: -200 }}
      transition={{ type: "spring", stiffness: 70, duration: 1 }}
    >
      <ContactForm />
    </motion.div>
  );
};

export default GetInTouch;
