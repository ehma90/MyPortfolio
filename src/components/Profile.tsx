import { Link, Text } from "@/reusable-components";
import React from "react";
import { motion } from "framer-motion";

function Profile() {
  return (
    <motion.div
      animate={{ y: 0 }}
      initial={{ y: 200 }}
      transition={{ duration: 0.9, type: "spring" }}
    >
      <ul className=" w-full space-y-2 md:space-y-4">
        <li className="leading-7 text-base md:text-lg">
          Hi 👋🏽, I&apos;m{" "}
          <span className="text-green-900 font-semibold ">Emmanuel,</span> a
          software engineer that specializes in web and mobile
          application&apos;s front-end. I also build RESTful API with
          Express.js.
        </li>
        <li className="leading-7 text-base md:text-lg">
          An organized, dedicated professional with 5 years of experience
          delivering interactive, responsive, and user-friendly applications,
          that resonate with users globally. With exceptional collaborativity. ●
          A proactive contributor who excels in collaborations and support, and
          drives efficiency across the teams I’m involved with.
        </li>
        <li>
          <Text as={"h6"} variant="h6">
            Available for jobs 🫱🏻‍🫲🏾 and collaborations.
          </Text>
        </li>
        <li className="leading-7 text-base md:text-lg">
          Join me on{" "}
          <Link
            href="https://twitter.com/ehmaessieen"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-green-900 underline decoration-1"
          >
            Twitter
          </Link>{" "}
          🕊️, where I share tweets about things I like and memes.
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
