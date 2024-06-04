import { Link, Text } from "@/reusable-components";
import React from "react";
import { motion } from "framer-motion";

function Profile() {
  return (
    <motion.div
      animate={{ y: 0 }}
      initial={{ y: 200 }}
      transition={{ duration: 0.9, type: "spring" }}
      className="w-full"
    >
      <ul className=" w-full space-y-2 md:space-y-4">
        <li className="leading-7 text-base md:text-lg">
          Hi 👋🏽, I&apos;m{" "}
          <span className="text-green-900 font-semibold ">Emmanuel,</span> a
          passionate professional software engineer with 5 years of learning and
          working experience delivering interactive, responsive, accessible, and
          user-friendly web and mobile applications that resonate with users
          globally. I possess exceptional collaborative, communication, and
          proactive contributor skills. I constantly educate myself on the
          latest technologies, techniques, and strategies to improve my
          knowledge in this field.
        </li>
        <li>
          <Text as={"h6"} variant="h6">
            Available for jobs 🫱🏻‍🫲🏾 and collaborations.
          </Text>
        </li>
        <li className="leading-7 text-base md:text-lg">
          Feel free to send an{" "}
          <Link
            href="mailto:ehmaessien@gmail.com"
            target="_blank"
            rel="noreferrer"
            className=" font-semibold text-green-900 underline decoration-1"
          >
            Email
          </Link>{" "}
          📧
        </li>
      </ul>
    </motion.div>
  );
}

export default Profile;
